import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MentalActivitiesCategoriesPage } from './mental-activities-categories';

@NgModule({
  declarations: [
    MentalActivitiesCategoriesPage,
  ],
  imports: [
    IonicPageModule.forChild(MentalActivitiesCategoriesPage),
  ],
  exports: [
    MentalActivitiesCategoriesPage
  ]
})
export class MentalActivitiesCategoriesPageModule {}
