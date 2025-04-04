import {Component} from '@angular/core';
import {Events, IonicPage, ModalController, NavController, NavParams, Platform, ViewController} from 'ionic-angular';
import {ActivityProvider} from "../../providers/activity/activity";
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {AlertProvider} from "../../providers/alert/alert";
import {SocialSharing} from "@ionic-native/social-sharing";
import {TranslateService} from "@ngx-translate/core";
import {AppStorageProvider} from "../../providers/app-storage/app-storage";
import {AnalyticsProvider} from "../../providers/analytics/analytics";
import {ShapesApiProvider} from "../../providers/shapes-api/shapes-api";
import {ActivityCategoryProvider} from "../../providers/activity-category/activity-category";
import {Helpers} from "../../helpers";
import {ActivityRatingProvider} from "../../providers/activity-rating/activity-rating";
import {RateComponent} from "../../components/rate/rate";

/**
 * Generated class for the ActivityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'activity-page',
  segment: 'activities/:lang/:slug'
})
@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html',
})
export class ActivityPage {
  activity: any;
  dailyActivityCompleted: boolean = false;
  allActivities: any = [];
  currentLang: string = 'en';
  setUpInProgress: boolean = false;
  category: any;
  imgIndex: number = 0;
  numOfRatings: number = 0;
  avgRating: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private activityProvider: ActivityProvider, private iab: InAppBrowser,
              public platform: Platform, private alert: AlertProvider, private socialSharing: SocialSharing,
              private viewCtrl: ViewController, private translate: TranslateService, public appStorage: AppStorageProvider,
              public events: Events, public analyticsProvider: AnalyticsProvider, public shapesApiProvider: ShapesApiProvider,
              private activityCategoryProvider: ActivityCategoryProvider, private activityRatingProvider: ActivityRatingProvider,
              private modalCtrl: ModalController) {


    const paramLang = this.navParams.get("lang");
    const langs = ['en', 'el', 'it', 'es'];
    if (paramLang && langs.indexOf(paramLang) > -1) {
      const lang = this.navParams.get("lang");
      activityProvider.currentLang = lang;
      this.translate.use(paramLang).subscribe(async () => {
        await this.appStorage.set('app_lang', lang);
        this.events.publish('lang_ready', lang);
      });
    }
    this.translate.onLangChange.subscribe(() => {
      this.setUpPageElements();
    });
  }

  ionViewDidEnter() {
    this.setUpPageElements();
  }

  async setUpPageElements() {
    if (this.setUpInProgress)
      return;
    this.setUpInProgress = true;
    this.currentLang = this.translate.currentLang;
    const robot_api = Helpers.getURLParam("robot_api");
    if (robot_api)
      await this.appStorage.set("robot_api", robot_api);
    if (this.pageOpenedFromDirectLink())
      this.shapesApiProvider.postAppStateToRobotAPI("started");
    this.activity = await this.getActivity();
    this.allActivities = await this.getActivities();
    this.category = await this.activityCategoryProvider.getCategoryBySlug(this.activity.category);
    const title = "DIANOIA_EXERCISE_STARTED_" + this.activity.title + "_" + this.activity.description + "_LANG_" + this.translate.currentLang;
    await this.analyticsProvider.logAction(
      title,
      {
        title: this.activity.title,
        slug: this.activity.slug,
        category: this.activity.category,
        difficulty_level_id: this.activity.difficulty_level_id
      }, title);
    this.setUpInProgress = false;
    this.activityRatingProvider.getAvgRatingForActivity(this.activity).subscribe((data) => {
      this.numOfRatings = data.num_of_ratings;
      this.avgRating = data.avg_rating;
    });
  }

  async getActivities(): Promise<any> {
    const instance = this;
    return new Promise(function callback(resolve, reject) {
      let activities = instance.navParams.get("allActivities");
      if (activities && activities.length) {
        resolve(activities);
      } else {
        instance.activityCategoryProvider.getActivitySlugsForCategory(instance.activity.category).subscribe(activitySlugs => {
          resolve(instance.activityProvider.getActivitiesBySlugs(activitySlugs));
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
        const slug = instance.navParams.get("slug");
        if (slug) {
          instance.activityProvider.getActivitiesBySlugs([slug]).then(activities => {
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

  nextActivity(next) {
    const direction = next ? 'forward' : 'back';
    for (let i = 0; i < this.allActivities.length; i++) {
      if (this.activity.slug == this.allActivities[i].slug) {
        const index = next ? (i + 1) : (i - 1);
        this.loadActivity(this.allActivities[index], direction);
        break;
      }
    }
  }

  loadActivity(nextActivity, animationDirection) {
    if (nextActivity) {
      this.navCtrl.push("activity-page", {
        lang: this.translate.currentLang,
        slug: nextActivity.slug,
        activity: nextActivity,
        allActivities: this.allActivities
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

  async activityDoneForToday() {
    if (this.platform.is('cordova')) {
      this.activityProvider.setActivityCompletedForToday().then(result => {
        this.dailyActivityCompleted = true;
        this.alert.displayToast(this.translate.instant('activity_done'));
        console.log("DIANOIA_EXERCISE_COMPLETED_LANG_" + this.translate.currentLang);
      });
    }
    const title = "DIANOIA_EXERCISE_COMPLETED_" + this.activity.title + "_" + this.activity.description + "_LANG_" + this.translate.currentLang;
    await this.analyticsProvider.logAction(
      title,
      {
        title: this.activity.title,
        slug: this.activity.slug,
        category: this.activity.category,
        difficulty_level_id: this.activity.difficulty_level_id
      }, title);
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
    const title = "DIANOIA_EXERCISE_PRINTED_" + this.activity.title + "_" + this.activity.description + "_LANG_" + this.translate.currentLang;
    this.analyticsProvider.logAction(
      title,
      {
        title: this.activity.title,
        slug: this.activity.slug,
        category: this.activity.category,
        difficulty_level_id: this.activity.difficulty_level_id
      }, title);
  }

  swipeActivity(event) {
    if (event.direction == 2) {
      this.nextActivity(true);
    } else if (event.direction == 4) {
      this.nextActivity(false);
    }
  }


  private getRandomActivity() {
    return this.allActivities[Math.floor(Math.random() * this.allActivities.length)];
  }

  private pageOpenedFromDirectLink() {
    let activity = this.navParams.get("activity");
    return activity == null;
  }

  openCategoryPage() {
    this.navCtrl.push("DifficultyLevelsPage", {
      categoryId: this.category.category_id,
      lang: this.translate.currentLang
    });
  }

  shouldShowSingleImg() {
    return this.activity.img_url && !Array.isArray(this.activity.img_url);
  }

  shouldShowMultipleImg() {
    return this.activity.img_url && Array.isArray(this.activity.img_url) && !this.activity.images_exclusive;
  }

  shouldShowMultipleExclusiveImg() {
    return this.activity.img_url && Array.isArray(this.activity.img_url) && this.activity.images_exclusive;
  }

  getCurrentImg() {
    return 'assets/img/activities/' + this.currentLang + '/' + this.activity.img_url[this.imgIndex];
  }

  getCurrentImgBtn() {
    return this.activity.image_btns[this.imgIndex];
  }

  loadNextImg() {
    if (this.imgIndex + 1 == this.activity.img_url.length)
      this.imgIndex = 0;
    else
      this.imgIndex += 1;
  }

  rateActivity() {
    let modal = this.modalCtrl.create(RateComponent, {
      avgRating: this.avgRating,
      activity: this.activity,
      numOfRatings: this.numOfRatings
    });
    modal.present();
    modal.onDidDismiss(data => {
      // update average rating
      if (data.avg_rating && data.num_of_ratings) {
        this.numOfRatings = data.num_of_ratings;
        this.avgRating = data.avg_rating;
      }
    });
  }

  getRounded(avgRating: number) {
    return Math.round(avgRating * 10) / 10
  }
}
