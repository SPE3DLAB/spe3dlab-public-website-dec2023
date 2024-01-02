import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './component/page/home-page/home-page.component';
import { LegalNoticePageComponent } from './component/page/legal-notice-page/legal-notice-page.component';
import { AboutUsComponent } from './component/page/about-us/about-us.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'legal-notice', component: LegalNoticePageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: '**', redirectTo: '' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
