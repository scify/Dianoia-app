import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import { DifficultyLevelsPage } from './difficulty-levels';
import {ButtonsListComponentModule} from "../../components/buttons-list/buttons-list.module";
import {CardsListComponentModule} from "../../components/cards-list/cards-list.module";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    DifficultyLevelsPage
  ],
  imports: [
    IonicPageModule.forChild(DifficultyLevelsPage),
    ButtonsListComponentModule,
    CardsListComponentModule,
    TranslateModule.forChild()
  ],
  exports: [
    DifficultyLevelsPage
  ]
})
export class DifficultyLevelsPageModule {}
