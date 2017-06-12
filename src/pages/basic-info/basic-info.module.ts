import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BasicInfoPage } from './basic-info';
import {ButtonsListComponentModule} from "../../components/buttons-list/buttons-list.module";

@NgModule({
  declarations: [
    BasicInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(BasicInfoPage),
    ButtonsListComponentModule
  ],
  exports: [
    BasicInfoPage
  ]
})
export class BasicInfoPageModule {}
