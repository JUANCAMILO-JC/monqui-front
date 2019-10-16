import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindFreightComponent } from './components/find-freight/find-freight.component';
import { AnnounceFreightComponent } from './components/announce-freight/announce-freight.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './components/home/home.component';
import { DialogModalComponent } from './components/dialog-modal/dialog-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FindFreightComponent,
    AnnounceFreightComponent,

    HomeComponent,

    DialogModalComponent,

    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    DialogModalComponent,
    AnnounceFreightComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
