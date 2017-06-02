import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StatisticsPage } from './statistics';

@NgModule({
  declarations: [
    StatisticsPage,
  ],
  imports: [
    IonicPageModule.forChild(StatisticsPage),
  ],
  exports: [
    StatisticsPage
  ]
})
export class StatisticsPageModule {}
