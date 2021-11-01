import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StatisticsPage } from './statistics';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    StatisticsPage,
  ],
  imports: [
    IonicPageModule.forChild(StatisticsPage),
    TranslateModule.forChild()
  ],
  exports: [
    StatisticsPage
  ]
})
export class StatisticsPageModule {}
