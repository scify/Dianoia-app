import {Component, EventEmitter, Input, Output} from '@angular/core';

/**
 * Generated class for the CardsListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'cards-list',
  templateUrl: 'cards-list.html'
})
export class CardsListComponent {

  @Input('cards') cards: [any];
  @Output() cardClick = new EventEmitter();

  constructor() {
  }

  onCardClick(card) {
    this.cardClick.emit(card)
  }

}
