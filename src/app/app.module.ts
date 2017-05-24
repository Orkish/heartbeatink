import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { ReservationComponent } from './components/reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    ReservationsComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
