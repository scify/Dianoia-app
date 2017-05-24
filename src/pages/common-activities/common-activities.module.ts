import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommonActivitiesPage } from './common-activities';

@NgModule({
  declarations: [
    CommonActivitiesPage,
  ],
  imports: [
    IonicPageModule.forChild(CommonActivitiesPage),
  ],
  exports: [
    CommonActivitiesPage
  ]
})
export class CommonActivitiesPageModule {}
