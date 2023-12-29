import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslationService } from 'src/app/module/translation/service/translation.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-legal-notice-page',
  templateUrl: './legal-notice-page.component.html',
  styleUrls: ['./legal-notice-page.component.scss'],
})
export class LegalNoticePageComponent {
  constructor(
    private metaTagService: Meta,
    private titleService: Title,
    private translationService: TranslationService
  ) {}

  ngOnInit() {
    this.titleService.setTitle(
      `${this.translationService.getTranslation(
        'legal_notice_page_meta_title'
      )} - ${environment.pageTitlePrefix}`
    );

    this.metaTagService.addTags([
      {
        name: 'description',
        content: `${this.translationService.getTranslation(
          'legal_notice_page_meta_description'
        )}`,
      },
    ]);
  }

  ngOnDestroy() {
    this.metaTagService.removeTag('name="description"');
  }
}
