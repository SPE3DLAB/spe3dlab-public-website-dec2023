import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslationService } from 'src/app/module/translation/service/translation.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  constructor(
    private metaTagService: Meta,
    private titleService: Title,
    private translationService: TranslationService
  ) {}

  ngOnInit() {
    this.titleService.setTitle(
      `${this.translationService.getTranslation('home_page_meta_title')} - ${
        environment.pageTitlePrefix
      }`
    );

    this.metaTagService.addTags([
      {
        name: 'description',
        content: `${this.translationService.getTranslation(
          'home_page_meta_description'
        )}`,
      },
    ]);
  }

  ngOnDestroy() {
    // Remove individual tags
    this.metaTagService.removeTag('name="description"');
  }
}
