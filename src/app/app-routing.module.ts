//modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { FinalComponent } from './final/final.component';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { ParameterComponent } from './parameter/parameter.component';
import { PlayerComponent } from './player/player.component';
import { WheelComponent } from './wheel/wheel.component';

const routes: Routes = [
  // {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: '', component:  HomeComponent},
  {path: 'parameter', component:  ParameterComponent},
  {path: 'player', component:  PlayerComponent},
  {path: 'wheel', component:  WheelComponent},
  {path: 'game', component: GameComponent},
  
  {path: 'final', component: FinalComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
