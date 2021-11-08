import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {HomePage} from './home';
import {CardsListComponentModule} from "../../components/cards-list/cards-list.module";
import {ButtonsListComponentModule} from "../../components/buttons-list/buttons-list.module";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [HomePage],
  imports: [IonicPageModule.forChild(HomePage),
    CardsListComponentModule,
    ButtonsListComponentModule,
    TranslateModule.forChild(),
  ]
})
export class HomePageModule {
}
