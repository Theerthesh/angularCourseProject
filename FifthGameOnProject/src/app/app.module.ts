import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameOnComponent } from './game-on/game-on.component';
import { OddNumComponent } from './odd-num/odd-num.component';
import { EvenNumComponent } from './even-num/even-num.component';

@NgModule({
  declarations: [
    AppComponent,
    GameOnComponent,
    OddNumComponent,
    EvenNumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
