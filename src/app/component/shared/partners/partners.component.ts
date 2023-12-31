import { Component } from '@angular/core';

interface PartnerInterface {
  routerLink: string;
  class: string;
  imageSrc: string;
  imageName: string;
}

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
})
export class PartnersComponent {
  partners: PartnerInterface[] = [
    {
      routerLink: 'partners',
      class: 'col-12 col-sm-5 col-md-2 p-3',
      imageSrc: '/assets/images/partners/partner-latim-logo.gif',
      imageName: 'latim-logo',
    },
    {
      routerLink: 'partners',
      class: 'col-12 col-sm-5 col-md-2',
      imageSrc: '/assets/images/partners/partner-chu-logo.jpeg',
      imageName: 'chu-logo',
    },
    {
      routerLink: 'partners',
      class: 'col-12 col-sm-5 col-md-2 p-3',
      imageSrc: '/assets/images/partners/partner-iris-logo.png',
      imageName: 'iris-logo',
    },
    {
      routerLink: 'partners',
      class: 'col-12 col-sm-5 col-md-2',
      imageSrc: '/assets/images/partners/partner-saint-denis-logo.png',
      imageName: 'saint-denis-logo',
    },
  ];
}
