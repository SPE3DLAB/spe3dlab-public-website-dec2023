import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-events-and-press',
  templateUrl: './events-and-press.component.html',
  styleUrls: ['./events-and-press.component.scss'],
})
export class EventsAndPressComponent {
  constructor(private metaTagService: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('SPE3DLab - Events and press');

    this.metaTagService.addTags([
      {
        name: 'description',
        content:
          'Events and press - SPE3DLab, Speed-up your data analysis, Big Data',
      },
    ]);
  }

  ngOnDestroy() {
    // Remove individual tags
    this.metaTagService.removeTag('name="description"');
  }
}
