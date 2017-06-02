import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoListPage } from './info-list';
import {CardsListComponentModule} from "../../components/cards-list/cards-list.module";

@NgModule({
  declarations: [
    InfoListPage,
  ],
  imports: [
    IonicPageModule.forChild(InfoListPage),
    CardsListComponentModule
  ],
  exports: [
    InfoListPage
  ]
})
export class InfoListPageModule {}
