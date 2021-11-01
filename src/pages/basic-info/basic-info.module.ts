import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BasicInfoPage } from './basic-info';
import {ButtonsListComponentModule} from "../../components/buttons-list/buttons-list.module";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    BasicInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(BasicInfoPage),
    ButtonsListComponentModule,
    TranslateModule.forChild()
  ],
  exports: [
    BasicInfoPage
  ]
})
export class BasicInfoPageModule {}
