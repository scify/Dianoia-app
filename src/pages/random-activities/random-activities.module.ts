import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RandomActivitiesPage } from './random-activities';
import {CardsListComponentModule} from "../../components/cards-list/cards-list.module";

@NgModule({
  declarations: [
    RandomActivitiesPage,
  ],
  imports: [
    IonicPageModule.forChild(RandomActivitiesPage),
    CardsListComponentModule
  ],
  exports: [
    RandomActivitiesPage
  ]
})
export class RandomActivitiesPageModule {}
