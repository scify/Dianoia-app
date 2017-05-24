import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivityCategoriesPage } from './activity-categories';

@NgModule({
  declarations: [
    ActivityCategoriesPage,
  ],
  imports: [
    IonicPageModule.forChild(ActivityCategoriesPage),
  ],
  exports: [
    ActivityCategoriesPage
  ]
})
export class ActivityCategoriesPageModule {}
