import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoListPage } from './info-list';

@NgModule({
  declarations: [
    InfoListPage,
  ],
  imports: [
    IonicPageModule.forChild(InfoListPage),
  ],
  exports: [
    InfoListPage
  ]
})
export class InfoListPageModule {}
