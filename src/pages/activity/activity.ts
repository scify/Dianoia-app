import {Component} from '@angular/core';
import {Events, IonicPage, NavController, NavParams, Platform, ViewController} from 'ionic-angular';
import {ActivityProvider} from "../../providers/activity/activity";
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {AlertProvider} from "../../providers/alert/alert";
import {SocialSharing} from "@ionic-native/social-sharing";
import {TranslateService} from "@ngx-translate/core";
import {AppStorageProvider} from "../../providers/app-storage/app-storage";

/**
 * Generated class for the ActivityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'activity-page',
  segment: 'activities/:lang/:id'
})
@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html',
})
export class ActivityPage {
  activity: any;
  dailyActivityCompleted: boolean = false;
  allActivities: any = [];
  activityUniqueId: string;
  currentLang: string = 'en';
  setUpInProgress: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private activityProvider: ActivityProvider, private iab: InAppBrowser,
              public platform: Platform, private alert: AlertProvider, private socialSharing: SocialSharing,
              private viewCtrl: ViewController, private translate: TranslateService, public appStorage: AppStorageProvider,
              public events: Events) {

    this.activityUniqueId = this.navParams.get("uniqueId");
    const paramLang = this.navParams.get("lang");
    const langs = ['en', 'el', 'it', 'es'];
    this.translate.onLangChange.subscribe(() => {
      this.setUpPageElements();
    });
    if (paramLang && langs.indexOf(paramLang) > -1) {
      const lang = this.navParams.get("lang");
      this.translate.use(paramLang).subscribe(() => {
        this.appStorage.set('app_lang', lang);
        this.events.publish('lang_ready', lang);
      });
    }
  }

  ionViewDidEnter() {
    this.setUpPageElements();
  }

  async setUpPageElements() {
    if (this.setUpInProgress)
      return;
    this.setUpInProgress = true;
    this.currentLang = this.translate.currentLang;
    this.allActivities = await this.getActivities();
    this.activity = await this.getActivity();
    console.log("DIANOIA_EXERCISE_STARTED_" + this.activity.title + "_" + this.activity.description + "_LANG_" + this.translate.currentLang);
    this.setUpInProgress = false;
  }

  async getActivities(): Promise<any> {
    const instance = this;
    return new Promise(function callback(resolve, reject) {
      let activities = instance.navParams.get("activity");
      if (activities && activities.length) {
        resolve(activities);
      } else {
        instance.activityProvider.getAllActivities().subscribe(activities => {
          resolve(activities);
        });
      }
    });
  }

  async getActivity(): Promise<any> {
    const instance = this;
    return new Promise(function callback(resolve, reject) {
      const activityObj = instance.navParams.get("activity");
      if (activityObj)
        resolve(activityObj);
      else {
        const paramId = instance.navParams.get("id");
        if (paramId) {
          instance.activityProvider.getActivitiesByIds([paramId]).then(activities => {
            if (!activities.length)
              resolve(instance.getRandomActivity());
            else
              resolve(activities[0]);
          });
        } else {
          resolve(instance.getRandomActivity());
        }
      }
    });
  }

  nextActivity() {
    for (let i = 0; i < this.allActivities.length; i++) {
      if (this.activityUniqueId == 'title') {
        if (this.activity.title == this.allActivities[i].title) {
          this.loadNextActivity(this.allActivities[i + 1], 'forward');
          break;
        }
      } else if (this.activityUniqueId == 'id') {
        if (this.activity.id == this.allActivities[i].id) {
          this.loadNextActivity(this.allActivities[i + 1], 'forward');
          break;
        }
      }
    }
  }

  previousActivity() {
    for (let i = 0; i < this.allActivities.length; i++) {
      if (this.activityUniqueId == 'title') {
        if (this.activity.title == this.allActivities[i].title) {
          this.loadNextActivity(this.allActivities[i - 1], 'back');
          break;
        }
      } else if (this.activityUniqueId == 'id') {
        if (this.activity.id == this.allActivities[i].id) {
          this.loadNextActivity(this.allActivities[i - 1], 'back');
          break;
        }
      }
    }
  }

  loadNextActivity(nextActivity, animationDirection) {
    if (nextActivity) {
      this.navCtrl.push("ActivityPage", {
        activity: nextActivity,
        allActivities: this.allActivities,
        uniqueId: this.activityUniqueId
      }, {animate: true, animation: 'ios-transition', direction: animationDirection}).then(() => {
        const index = this.viewCtrl.index;
        this.navCtrl.remove(index);
      });
    }
  }

  activityIsNotFirst() {
    if (this.allActivities)
      return this.allActivities[0] !== this.activity;
    return false;
  }

  activityIsNotLast() {
    if (this.allActivities)
      return this.allActivities[this.allActivities.length - 1] !== this.activity;
    return false;
  }

  activityDoneForToday() {
    this.activityProvider.setActivityCompletedForToday().then(result => {
      this.dailyActivityCompleted = true;
      if (!this.platform.is('core')) {
        this.translate.get('activity_done').subscribe((translated: string) => {
          this.alert.displayToast(translated);
        });
      }
      console.log("DIANOIA_EXERCISE_COMPLETED_LANG_" + this.translate.currentLang);
    });
  }

  openLink(url) {
    this.iab.create(url);
  }

  // tslint:disable-next-line:no-unused-variable
  share(activity) {
    this.translate.get('app_activity').subscribe((translated: string) => {
      const options = {
        message: translated + ': ' + activity.title + "    ",
        subject: translated + ': ' + activity.title,
        url: activity.link,
        chooserTitle: this.translate.instant('share_with') + '...'
      };

      this.socialSharing.shareWithOptions(options).then(result => {
        // if(result.completed)
        //this.alert.displayToast("Η δραστηριοτητα κοινοποιηθηκε");
      }).catch(error => {
        this.alert.textDialog(this.translate.instant('error'), this.translate.instant('sharing_not_supported'));
      });
    });

  }

  swipeActivity(event) {
    if (event.direction == 2) {
      this.nextActivity();
    } else if (event.direction == 4) {
      this.previousActivity();
    }
  }


  private getRandomActivity() {
    return this.allActivities[Math.floor(Math.random() * this.allActivities.length)];
  }
}
