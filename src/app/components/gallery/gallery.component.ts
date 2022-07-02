import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnInit {
  cities: Array<any>=[];
  product_list:Array<any> = [];
  selectedCityCode: any;

  constructor() { }

  ngOnInit(): void {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];

    this.product_list = [
      {
        "product_image":"black-watch.jpg",
        "sale_price":"449",
        "original_price":"999",
        "discount":"50",
        "product_name":"Watch",
        "color":"Black"
      },
      {
        "product_image":"bamboo-watch.jpg",
        "sale_price":"449",
        "original_price":"999",
        "discount":"50",
        "product_name":"Watch",
        "color":"Brown"
      },
      {
        "product_image":"bracelet.jpg",
        "sale_price":"99",
        "original_price":"299",
        "discount":"75",
        "product_name":"Bracelet",
        "color":"Black"
      },
      {
        "product_image":"brown-purse.jpg",
        "sale_price":"1499",
        "original_price":"2999",
        "discount":"75",
        "product_name":"Purse",
        "color":"Brown"
      },
      {
        "product_image":"gold-phone-case.jpg",
        "sale_price":"399",
        "original_price":"799",
        "discount":"40",
        "product_name":"Phone",
        "color":"Golden"
      },
      {
        "product_image":"galaxy-earrings.jpg",
        "sale_price":"249",
        "original_price":"599",
        "discount":"60",
        "product_name":"earrings",
        "color":"Multi-coloured"
      },
      {
        "product_image":"green-earbuds.jpg",
        "sale_price":"1399",
        "original_price":"1899",
        "discount":"30",
        "product_name":"Earpods",
        "color":"Green"
      }
    ];
  }

}
