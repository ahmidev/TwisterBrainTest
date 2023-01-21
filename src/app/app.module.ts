import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinalComponent } from './final/final.component';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { ParameterComponent } from './parameter/parameter.component';
import { PlayerComponent } from './player/player.component';
import { WheelComponent } from './wheel/wheel.component';

@NgModule({
  declarations: [
    AppComponent,
    FinalComponent,
    GameComponent,
    HomeComponent,
    ParameterComponent,
    PlayerComponent,
    WheelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
