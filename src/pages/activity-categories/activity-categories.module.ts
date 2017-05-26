import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivityCategoriesPage } from './activity-categories';
import {ButtonsListComponentModule} from "../../components/buttons-list/buttons-list.module";


@NgModule({
  declarations: [
    ActivityCategoriesPage
  ],
  imports: [
    IonicPageModule.forChild(ActivityCategoriesPage),
    ButtonsListComponentModule
  ],
  exports: [
    ActivityCategoriesPage
  ]
})
export class TopActivityCategoriesPageModule {}
