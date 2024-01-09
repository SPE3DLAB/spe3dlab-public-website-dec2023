import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-partners-page',
  templateUrl: './partners-page.component.html',
  styleUrls: ['./partners-page.component.scss'],
})
export class PartnersPageComponent {
  constructor(private metaTagService: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('SPE3DLab - Partners');

    this.metaTagService.addTags([
      {
        name: 'description',
        content: 'Partners - SPE3DLab, Speed-up your data analysis, Big Data',
      },
    ]);
  }

  ngOnDestroy() {
    // Remove individual tags
    this.metaTagService.removeTag('name="description"');
  }
}
