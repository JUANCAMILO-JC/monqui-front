import { HomeComponent } from './components/home/home.component';
import { AnnounceFreightComponent } from './components/announce-freight/announce-freight.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'freight', component: AnnounceFreightComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
