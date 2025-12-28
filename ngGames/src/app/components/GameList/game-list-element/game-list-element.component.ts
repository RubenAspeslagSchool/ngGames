import { Component, inject, Input  } from '@angular/core';
import { GameScoreService } from '../../../services/gamescore.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-game-list-element',
  imports: [RouterModule],
  templateUrl: './game-list-element.component.html',
  styleUrl: './game-list-element.component.scss'
})

export class GameListElementComponent  {
  gameScoreService = inject(GameScoreService);
  @Input() gameName!: string;
  @Input() description!: string;
  @Input() uri!: string;
  score: number = 0;

  ngOnInit(): void {
    this.score = this.gameScoreService.getScore(this.gameName);
  }
}
