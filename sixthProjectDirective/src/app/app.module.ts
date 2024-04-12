import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NormalMethodDirective } from './normal-method/normal-method.directive';
import { RenderDirectiveDirective } from './renderDirective/render-directive.directive';
import { MouseeventDirectiveDirective } from './mouseevent-directive/mouseevent-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    NormalMethodDirective,
    RenderDirectiveDirective,
    MouseeventDirectiveDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
