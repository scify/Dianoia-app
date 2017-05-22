import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TipsListPage } from './tips-list';

@NgModule({
  declarations: [
    TipsListPage,
  ],
  imports: [
    IonicPageModule.forChild(TipsListPage),
  ],
  exports: [
    TipsListPage
  ]
})
export class TipsListPageModule {}
