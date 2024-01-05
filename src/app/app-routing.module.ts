import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './component/page/home-page/home-page.component';
import { PartnersPageComponent } from './component/page/partners-page/partners-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'partners', component: PartnersPageComponent },
  { path: '**', redirectTo: '' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
