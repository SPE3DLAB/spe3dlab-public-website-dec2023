import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslationService } from 'src/app/module/translation/service/translation.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  constructor(
    private metaTagService: Meta,
    private titleService: Title,
    private translationService: TranslationService
  ) {}

  ngOnInit() {
    this.titleService.setTitle(
      `${this.translationService.getTranslation('about_us_meta_title')} - ${
        environment.pageTitlePrefix
      }`
    );

    this.metaTagService.addTags([
      {
        name: 'description',
        content: `${this.translationService.getTranslation(
          'about_us_meta_description'
        )}`,
      },
    ]);
  }

  ngOnDestroy() {
    // Remove individual tags
    this.metaTagService.removeTag('name="description"');
  }
}
