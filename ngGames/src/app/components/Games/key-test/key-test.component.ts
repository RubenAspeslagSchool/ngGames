import { Component, HostListener, inject  } from '@angular/core';
import { GameScoreService } from '../../../services/gamescore.service';

@Component({
  selector: 'app-key-test',
  imports: [],
  templateUrl: './key-test.component.html',
  styleUrl: './key-test.component.scss'
})
export class KeyTestComponent {
  lastKey = '';
  letters: string[] = [];
  score = 0;
  currentStreak = 0;
  gameOver = false;
  maxLetters = 10;
  scoreService = inject(GameScoreService)
  ngOnInit() {
    this.generateLetters();
  }


    generateLetters() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    this.letters = [];
    
    // Fisher-Yates shuffle
    for (let i = 0; i < this.maxLetters; i++) {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      this.letters.push(alphabet[randomIndex]);
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    if (this.gameOver || !event.key.match(/^[a-z]$/)) {
      return;
    }

    const pressedKey = event.key.toLowerCase();
    const nextIndex = this.letters.findIndex((letter, i) => !this.isLetterCompleted(i));

    if (nextIndex === -1 || this.letters[nextIndex] !== pressedKey) {
      // Wrong key - game over
      this.gameOver = true;
      return;
    }

    // Correct key - remove first letter
    this.letters.splice(nextIndex, 1);
    
    this.score++;
    this.currentStreak++;
    this.scoreService.setScore("keyTest", this.score)
    // Generate new letter if needed
    if (this.letters.length < this.maxLetters) {
      const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      this.letters.push(alphabet[randomIndex]);
    }
  }

  getNextLetter(): string {
    const nextIndex = this.letters.findIndex((letter, i) => !this.isLetterCompleted(i));
    return nextIndex !== -1 ? this.letters[nextIndex] : '';
  }

  private isLetterCompleted(index: number): boolean {
    return index < this.letters.length - this.maxLetters;
  }

  getLetterClass(index: number): string {
    if (this.isLetterCompleted(index)) {
      return 'letter-correct';
    }
    if (index === this.letters.findIndex((letter, i) => !this.isLetterCompleted(i))) {
      return 'letter-current';
    }
    return '';
  }



  startNewGame() {
    this.score = 0;
    this.currentStreak = 0;
    this.gameOver = false;
    this.generateLetters();
  }
}
