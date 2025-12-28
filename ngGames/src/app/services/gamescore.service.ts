import { Injectable } from "@angular/core"

export type GameScores = {
    scores: Array<GameScore>
}

export type GameScore = {
    gameName : string
    gameScore : number
}

const APP_DATA_KEY = 'gameScores';

@Injectable({
  providedIn: 'root',
})
export class GameScoreService {
  private loadData(): GameScores {
    const json = localStorage.getItem(APP_DATA_KEY);
    if (!json) {
      return { scores: [] };
    }

    try {
      return JSON.parse(json) as GameScores;
    } catch {
      // corrupt data fallback
      return { scores: [] };
    }
  }

  private saveData(data: GameScores): void {
    localStorage.setItem(APP_DATA_KEY, JSON.stringify(data));
  }

  addScore(newScore: GameScore): void {
    const data = this.loadData();

    // if game already exists, you can choose to update instead of push
    const existingIndex = data.scores.findIndex(
      s => s.gameName === newScore.gameName
    );

    if (existingIndex === -1) {
      data.scores.push(newScore);
    } else {
      data.scores[existingIndex] = newScore;
    }

    this.saveData(data);
  }

  setScore(gameName: string, gameScore: number): void {
    const data = this.loadData();
    const index = data.scores.findIndex(s => s.gameName === gameName);

    if (index !== -1) {
        if (data.scores[index].gameScore >= gameScore ) return // make sure only highests score is saved
      data.scores[index] = { ...data.scores[index], gameScore };
      this.saveData(data);
    }
     else { 
        this.addScore({ gameName, gameScore } 
        ); }
  }

  getScores(): GameScore[] {
    return this.loadData().scores;
  }

  getScore(gameName: string): number {
        const data = this.loadData();
        const gamescore : GameScore | undefined =  data.scores.find(s => s.gameName === gameName);
        if (gamescore === undefined) return 0
        return gamescore.gameScore
  }
}
