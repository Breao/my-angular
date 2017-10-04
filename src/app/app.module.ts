import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@NgModule({
  imports: [
    BrowserModule,
      FormsModule
  ],
  declarations: [
    AppComponent,
      HeroDetailComponent
  ],
  providers: [
      HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
