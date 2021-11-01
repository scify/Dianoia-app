import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivityCategoriesPage } from './activity-categories';
import {ButtonsListComponentModule} from "../../components/buttons-list/buttons-list.module";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    ActivityCategoriesPage
  ],
  imports: [
    IonicPageModule.forChild(ActivityCategoriesPage),
    ButtonsListComponentModule,
    TranslateModule.forChild()
  ],
  exports: [
    ActivityCategoriesPage
  ]
})
export class TopActivityCategoriesPageModule {}
