import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ButtonsListPage } from './buttons-list';

@NgModule({
  declarations: [
    ButtonsListPage,
  ],
  imports: [
    IonicPageModule.forChild(ButtonsListPage),
  ],
  exports: [
    ButtonsListPage
  ]
})
export class ButtonsListPageModule {}
