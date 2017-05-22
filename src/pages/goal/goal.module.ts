import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoalPage } from './goal';

@NgModule({
  declarations: [
    GoalPage,
  ],
  imports: [
    IonicPageModule.forChild(GoalPage),
  ],
  exports: [
    GoalPage
  ]
})
export class GoalPageModule {}
