import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivityPage } from './activity';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    ActivityPage,
  ],
  imports: [
    IonicPageModule.forChild(ActivityPage),
    TranslateModule.forChild()
  ],
  exports: [
    ActivityPage
  ]
})
export class ActivityPageModule {}
