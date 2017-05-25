import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ButtonsListComponent } from './buttons-list';

@NgModule({
  declarations: [
    ButtonsListComponent,
  ],
  imports: [
    IonicPageModule.forChild(ButtonsListComponent),
  ],
  exports: [
    ButtonsListComponent
  ]
})
export class ButtonsListComponentModule {}
