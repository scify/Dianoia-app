import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardsListComponent } from './cards-list';

@NgModule({
  declarations: [
    CardsListComponent,
  ],
  imports: [
    IonicPageModule.forChild(CardsListComponent),
  ],
  exports: [
    CardsListComponent
  ]
})
export class CardsListComponentModule {}
