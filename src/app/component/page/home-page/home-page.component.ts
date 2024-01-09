import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  constructor(private metaTagService: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(
      'SPE3DLab - Easy-to-use open-source data analysis tool for questioning structured and unstructured data'
    );

    this.metaTagService.addTags([
      {
        name: 'description',
        content:
          'Easy-to-use open-source data analysis tool for questioning structured and unstructured data - SPE3DLab, Speed-up your data analysis, Big Data',
      },
    ]);
  }

  ngOnDestroy() {
    // Remove individual tags
    this.metaTagService.removeTag('name="description"');
  }
}
