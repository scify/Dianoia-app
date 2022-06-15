import {NgModule} from '@angular/core';
import {RateComponent} from './rate/rate';
import {IonicModule} from "ionic-angular/module";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [RateComponent,
    RateComponent],
  imports: [
    IonicModule,
    TranslateModule.forChild()
  ],
  exports: [RateComponent,
    RateComponent]
})
export class ComponentsModule {
}
