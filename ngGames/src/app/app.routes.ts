import { Routes } from '@angular/router';
import { GameListComponent } from './components/GameList/game-list/game-list.component';
import { KeyTestComponent } from './components/Games/key-test/key-test.component';


export const routes: Routes = [
  { path: '', redirectTo: '/games', pathMatch: 'full' },
  { path: 'games', component: GameListComponent },
  { path: 'games/:gameName', component: KeyTestComponent }, 
];