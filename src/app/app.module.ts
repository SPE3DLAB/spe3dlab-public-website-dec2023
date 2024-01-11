import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslationService } from './module/translation/service/translation.service';
import { NotificationService } from './service/notification.service';
import { HomePageComponent } from './component/page/home-page/home-page.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { ContactUsComponent } from './component/shared/contact-us/contact-us.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { NotificationComponent } from './component/shared/notification/notification.component';
import { OtherTranslationsComponent } from './component/shared/other-translations/other-translations.component';
import { PartnersComponent } from './component/shared/partners/partners.component';
import { DemoVideoComponent } from './component/shared/demo-video/demo-video.component';
import { FeatureOverviewComponent } from './component/shared/feature-overview/feature-overview.component';
import { PartnersPageComponent } from './component/page/partners-page/partners-page.component';
import { PublicationsComponent } from './component/page/publications/publications.component';
import { EventsAndPressComponent } from './component/page/events-and-press/events-and-press.component';
import { ImageWithTextBottomComponent } from './component/shared/image-with-text-bottom/image-with-text-bottom.component';
import { ImageWithTextSideBySideComponent } from './component/shared/image-with-text-side-by-side/image-with-text-side-by-side.component';

export function translationServiceFactory(
  translationService: TranslationService
) {
  return () => translationService.loadTranslations();
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    ContactUsComponent,
    FooterComponent,
    NotificationComponent,
    OtherTranslationsComponent,
    PartnersComponent,
    DemoVideoComponent,
    FeatureOverviewComponent,
    ImageWithTextBottomComponent,
    ImageWithTextSideBySideComponent,
    PartnersComponent,
    PartnersPageComponent,
    PublicationsComponent,
    EventsAndPressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    NotificationService,
    TranslationService,
    {
      provide: LOCALE_ID,
      useValue: environment.defaultLanguage,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: translationServiceFactory,
      deps: [TranslationService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
