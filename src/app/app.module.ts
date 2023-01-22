import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
// modules
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


//component
import { AppComponent } from './app.component';
import { FinalComponent } from './final/final.component';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { ParameterComponent } from './parameter/parameter.component';
import { PlayerComponent } from './player/player.component';
import { WheelComponent } from './wheel/wheel.component';
import { TestComponent } from './test/test.component';
import { QuestionService } from './question.service';

@NgModule({
  declarations: [
    AppComponent,
    FinalComponent,
    GameComponent,
    HomeComponent,
    ParameterComponent,
    PlayerComponent,
    WheelComponent,
    TestComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
