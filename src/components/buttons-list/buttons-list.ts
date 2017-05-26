import {Component, EventEmitter, Input, Output} from '@angular/core';

/**
 * Generated class for the ButtonsListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'buttons-list',
  templateUrl: 'buttons-list.html'
})
export class ButtonsListComponent {

  @Input('buttons') buttons: [any];
  @Output() buttonClick = new EventEmitter();

  constructor() {
  }

  onButtonClick(button) {
    this.buttonClick.emit(button)
  }

}
