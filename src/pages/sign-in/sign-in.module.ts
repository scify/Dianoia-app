import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignInPage } from './sign-in';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    SignInPage,
  ],
  imports: [
    IonicPageModule.forChild(SignInPage),
    TranslateModule.forChild()
  ],
  exports: [
    SignInPage
  ]
})
export class SignInPageModule {}
