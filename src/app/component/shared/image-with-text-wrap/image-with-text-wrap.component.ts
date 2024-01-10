import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-with-text-wrap',
  templateUrl: './image-with-text-wrap.component.html',
  styleUrls: ['./image-with-text-wrap.component.scss'],
})
export class ImageWithTextWrapComponent {
  @Input() title: string = '';
  @Input() imageSource: string = '';
  @Input() imageName: string = '';
  @Input() content:string = '';
}
