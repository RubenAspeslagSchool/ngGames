import { Component } from '@angular/core';
import { GameListElementComponent } from '../game-list-element/game-list-element.component';
@Component({
  selector: 'app-game-list',
  imports: [GameListElementComponent],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss'
})
export class GameListComponent {

}
