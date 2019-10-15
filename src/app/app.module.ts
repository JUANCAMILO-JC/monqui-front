import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FindFreightComponent } from './components/find-freight/find-freight.component';
import { AnnounceFreightComponent } from './components/announce-freight/announce-freight.component';

@NgModule({
  declarations: [
    AppComponent,
    FindFreightComponent,
    AnnounceFreightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
