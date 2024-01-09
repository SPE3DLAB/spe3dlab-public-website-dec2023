import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-with-text-wrap',
  templateUrl: './image-with-text-wrap.component.html',
  styleUrls: ['./image-with-text-wrap.component.scss'],
})
export class ImageWithTextWrapComponent {
  @Input() title: string = '';
  @Input() subTitle: string = '';
  @Input() imageWrapperClass: string = '';
  @Input() imageSource: string = '';
  @Input() imageSources: { imageSource: string; imageName: string }[] = [];
  @Input() carouselId: string = '';
  @Input() imageName: string = '';
  @Input() imageHeight: string = '300px';
  @Input() imageWidth: string = 'auto';
  @Input() swapTextAndImage: boolean = false;
}
