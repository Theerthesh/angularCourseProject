import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerDetailsComponent } from './server-details/server-details.component';
import { ServerInputComponent } from './server-input/server-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerDetailsComponent,
    ServerInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
