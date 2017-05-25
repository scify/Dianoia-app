import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivityCategoriesPage } from './activity-categories';
import {ButtonsListComponent} from "../../components/buttons-list/buttons-list";


@NgModule({
  declarations: [
    ActivityCategoriesPage,
    ButtonsListComponent
  ],
  imports: [
    IonicPageModule.forChild(ActivityCategoriesPage),
  ],
  exports: [
    ActivityCategoriesPage
  ]
})
export class TopActivityCategoriesPageModule {}
