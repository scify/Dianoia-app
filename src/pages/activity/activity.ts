import {Component} from '@angular/core';
import {Events, IonicPage, NavController, NavParams, Platform, ViewController} from 'ionic-angular';
import {ActivityProvider} from "../../providers/activity/activity";
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {AlertProvider} from "../../providers/alert/alert";
import {SocialSharing} from "@ionic-native/social-sharing";
import {TranslateService} from "@ngx-translate/core";

/**
 * Generated class for the ActivityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
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

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private activityProvider: ActivityProvider, private iab: InAppBrowser,
              public platform: Platform, private alert: AlertProvider, private socialSharing: SocialSharing,
              private viewCtrl: ViewController,
              private translate: TranslateService, public events: Events) {
    let activityObj = this.navParams.get("activity");
    if (!activityObj) {
      this.activityProvider.getRandomActivity().then(randomActivity => {
        this.activity = randomActivity;
      });
    } else {
      this.activity = activityObj;
    }
    this.allActivities = this.navParams.get("allActivities");
    this.activityUniqueId = this.navParams.get("uniqueId");

  }

  ionViewWillLoad() {
    this.events.subscribe('lang_ready', (langCode) => {
      this.currentLang = langCode;
      this.activityProvider.getActivitiesByIds([this.activity.id]).then(activities => {
        this.activity = activities[0];
      });
    });
    this.platform.ready().then(() => {
      this.translate.get('app_name').subscribe(() => {
        this.currentLang = this.translate.currentLang;
      });
    });
  }

  ionViewWillUnload() {
    this.events.unsubscribe('lang_ready');
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
        console.log(result);
        // if(result.completed)
        //this.alert.displayToast("Η δραστηριοτητα κοινοποιηθηκε");
      }).catch(error => {
        this.alert.textDialog(this.translate.instant('error'), this.translate.instant('sharing_not_supported'));
      });
    });

  }

  swipeActivity(event) {
    console.log(event.direction);
    if (event.direction == 2) {
      this.nextActivity();
    } else if (event.direction == 4) {
      this.previousActivity();
    }
  }


}
