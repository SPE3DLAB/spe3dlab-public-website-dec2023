import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss'],
})
export class PublicationsComponent {
  constructor(private metaTagService: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('SPE3DLab - Publications');

    this.metaTagService.addTags([
      {
        name: 'description',
        content:
          'Publications - SPE3DLab, Speed-up your data analysis, Big Data',
      },
    ]);
  }

  ngOnDestroy() {
    // Remove individual tags
    this.metaTagService.removeTag('name="description"');
  }
}
