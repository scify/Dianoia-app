import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import {CardsListComponentModule} from "../../components/cards-list/cards-list.module";
@NgModule({
  declarations: [HomePage],
  imports: [IonicPageModule.forChild(HomePage),
    CardsListComponentModule
  ]
})
export class HomePageModule { }
