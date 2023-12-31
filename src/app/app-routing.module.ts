import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './component/page/home-page/home-page.component';
import { PartnersPageComponent } from './component/page/partners-page/partners-page.component';
import { PublicationsComponent } from './component/page/publications/publications.component';
import { EventsAndPressComponent } from './component/page/events-and-press/events-and-press.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'events-and-press', component: EventsAndPressComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'partners', component: PartnersPageComponent },
  { path: '**', redirectTo: '' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
