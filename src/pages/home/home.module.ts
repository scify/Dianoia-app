import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import {CardsListComponentModule} from "../../components/cards-list/cards-list.module";
import {ButtonsListComponentModule} from "../../components/buttons-list/buttons-list.module";
@NgModule({
  declarations: [HomePage],
  imports: [IonicPageModule.forChild(HomePage),
    CardsListComponentModule,
    ButtonsListComponentModule
  ]
})
export class HomePageModule { }
