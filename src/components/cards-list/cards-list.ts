import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Events, Platform} from "ionic-angular";
import {TranslateService} from "@ngx-translate/core";

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
  activityTranslationSingular: string = '';
  activityTranslationPlural: string = '';
  @Input('cards') cards: [any];
  @Output() cardClick = new EventEmitter();

  constructor(public platform: Platform, private translate: TranslateService,
              public events: Events) {

  }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.translate.get('activity_translation_singular').subscribe((translated) => {
        this.activityTranslationSingular = translated;
        this.activityTranslationPlural = this.translate.instant('activity_translation_plural');
      });
    });
    this.events.subscribe('lang_ready', (langCode) => {
      this.activityTranslationSingular = this.translate.instant('activity_translation_singular');
      this.activityTranslationPlural = this.translate.instant('activity_translation_plural');
    });
  }

  ngOnDestroy() {

  }

  getCardsListTitle() {
    let title = this.cards.length;
    if(!this.cards) return '';
    if(this.cards[0].id) {
      return this.cards.length == 1 ? title + " " + this.activityTranslationSingular + ":" : title + " " + this.activityTranslationPlural + ":";
    }
  }

  onCardClick(card) {
    this.cardClick.emit(card)
  }

}
