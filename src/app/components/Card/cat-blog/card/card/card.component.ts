import { Component, Input } from '@angular/core';
import { CatFact } from 'src/app/models/cat-facts';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  CatFact!: CatFact;

  time: number = Date.now();

}
