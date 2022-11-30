import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnInit {
  cities: Array<any>=[];
  product_list:Array<any> = [];
  styles:Array<any> = [];
  price:Array<any> = [];
  category_type:Array<any> = [];
  selectedStyle: any;
  selectedPrice:any;
  selectedType:any;
  hoveredItem:any;
  room_type=localStorage.getItem('room-type');

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.styles = [
      {name: 'Style'},
      {name: 'Contemporary'},
      {name: 'Modern'},
      {name: 'Traditional'},
      {name: 'Eclectic'},
      {name: 'Rustic'},
      {name: 'Country'},
      {name: 'Mediterranean'},
      {name: 'Coastal'},
      {name: 'Scandinavian'},
      {name: 'Midcentury'},
      {name: 'Industrial'},
      {name: 'Victorian'},
      {name: 'World'},
    ];

    this.price=[
      {amount: 'Price'},
      {amount: 'Under $175'},
      {amount: '$175 to $300'},
      {amount: '$300 to $400'},
      {amount: '$400 to $700'},
      {amount: 'Above $700'}
    ];

    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];

    if(this.room_type == 'kitchen')  //kitchen will not be hard-coded(has to be changed dynamically)
    {
      this.product_list = [
        {
          "product_image":"kitchen/kit1.png",
          "sale_price":"449",
          "original_price":"999",
          "discount":"50",
          "product_name":"Kitchen",
          "color":"Black",
          "prod_description":"Black watch with round dial"
        },
        {
          "product_image":"kitchen/kit2.png",
          "sale_price":"449",
          "original_price":"999",
          "discount":"50",
          "product_name":"U shaped kitchen",
          "color":"Brown",
          "prod_description":"Brown watch with bamboo touch"
        },
        {
          "product_image":"kitchen/kit3.png",
          "sale_price":"99",
          "original_price":"299",
          "discount":"75",
          "product_name":"Centred kitchen",
          "color":"Black",
          "prod_description":"Bracelet for girls in affordable price"
        },
        {
          "product_image":"kitchen/kit4.png",
          "sale_price":"1499",
          "original_price":"2999",
          "discount":"75",
          "product_name":"Small kitchen",
          "color":"Brown",
          "prod_description":"Brown pure leather purse"
        },
        {
          "product_image":"kitchen/kit5.png",
          "sale_price":"399",
          "original_price":"799",
          "discount":"40",
          "product_name":"Blue themed kitchen",
          "color":"Golden",
          "prod_description":"Golden phone case for iPhone"
        },
        {
          "product_image":"kitchen/kit6.png",
          "sale_price":"249",
          "original_price":"599",
          "discount":"60",
          "product_name":"Wooden kitchen",
          "color":"Multi-coloured",
          "prod_description":"Multi-colored short earings"
        },
        {
          "product_image":"kitchen/kit7.png",
          "sale_price":"1399",
          "original_price":"1899",
          "discount":"30",
          "product_name":"Modern kitchen",
          "color":"Green",
          "prod_description":"Earpods with classy look"
        },
        {
          "product_image":"kitchen/kit8.png",
          "sale_price":"399",
          "original_price":"799",
          "discount":"40",
          "product_name":"Blu themed kitchen",
          "color":"Golden",
          "prod_description":"Golden phone case for iPhone"
        },
        {
          "product_image":"kitchen/kit9.png",
          "sale_price":"249",
          "original_price":"599",
          "discount":"60",
          "product_name":"Wooden kitchen",
          "color":"Multi-coloured",
          "prod_description":"Multi-colored short earings"
        },
        {
          "product_image":"kitchen/kit10.png",
          "sale_price":"1399",
          "original_price":"1899",
          "discount":"30",
          "product_name":"Spacious kitchen",
          "color":"Green",
          "prod_description":"Earpods with classy look"
        }
      ];

      this.category_type=[
        {name: 'Type'},
        {name: 'Dining Chairs'},
        {name: 'Dining Tables'},
        {name: 'Bar Stools'},
        {name: 'Kitchen & Dining Furniture'}
      ];
    }
    else if(this.room_type == 'bathroom')
    {
      this.product_list = [
        {
          "product_image":"bathroom/bath1.png",
          "sale_price":"449",
          "original_price":"999",
          "discount":"50",
          "product_name":"Classy bathroom",
          "color":"Black",
          "prod_description":"Black watch with round dial"
        },
        {
          "product_image":"bathroom/bath2.png",
          "sale_price":"449",
          "original_price":"999",
          "discount":"50",
          "product_name":"Small bathroom",
          "color":"Brown",
          "prod_description":"Brown watch with bamboo touch"
        },
        {
          "product_image":"bathroom/bath3.png",
          "sale_price":"99",
          "original_price":"299",
          "discount":"75",
          "product_name":"Bathroom",
          "color":"Black",
          "prod_description":"Bracelet for girls in affordable price"
        },
        {
          "product_image":"bathroom/bath4.png",
          "sale_price":"1499",
          "original_price":"2999",
          "discount":"75",
          "product_name":"Black themed bathroom",
          "color":"Brown",
          "prod_description":"Brown pure leather purse"
        },
        {
          "product_image":"bathroom/bath5.png",
          "sale_price":"399",
          "original_price":"799",
          "discount":"40",
          "product_name":"Spacious bathroom",
          "color":"Golden",
          "prod_description":"Golden phone case for iPhone"
        },
        {
          "product_image":"bathroom/bath6.png",
          "sale_price":"249",
          "original_price":"599",
          "discount":"60",
          "product_name":"bathroom with bathtub",
          "color":"Multi-coloured",
          "prod_description":"Multi-colored short earings"
        },
        {
          "product_image":"bathroom/bath7.png",
          "sale_price":"1399",
          "original_price":"1899",
          "discount":"30",
          "product_name":"Blue themed bathroom",
          "color":"Green",
          "prod_description":"Earpods with classy look"
        },
        {
          "product_image":"bathroom/bath8.png",
          "sale_price":"249",
          "original_price":"599",
          "discount":"60",
          "product_name":"Bathroom",
          "color":"Multi-coloured",
          "prod_description":"Multi-colored short earings"
        },
        {
          "product_image":"bathroom/bath9.png",
          "sale_price":"1399",
          "original_price":"1899",
          "discount":"30",
          "product_name":"Biege themed bathroom",
          "color":"Green",
          "prod_description":"Earpods with classy look"
        }
      ];

      this.category_type=[
        {name: 'Type'},
        {name: 'Bathroom Cabinets'},
        {name: 'Bathroom Accessories'},
        {name: 'Bathroom Vanity Units'},
        {name: 'Bathroom Mirrors'}
      ]
    }
    else if(this.room_type == 'bedroom')
    {
      this.product_list = [
        {
          "product_image":"bedroom/bed1.png",
          "sale_price":"449",
          "original_price":"999",
          "discount":"50",
          "product_name":"Large bedroom",
          "color":"Black",
          "prod_description":"Black watch with round dial"
        },
        {
          "product_image":"bedroom/bed2.png",
          "sale_price":"449",
          "original_price":"999",
          "discount":"50",
          "product_name":"Wooden bedroom",
          "color":"Brown",
          "prod_description":"Brown watch with bamboo touch"
        },
        {
          "product_image":"bedroom/bed3.png",
          "sale_price":"99",
          "original_price":"299",
          "discount":"75",
          "product_name":"Kids bedroom",
          "color":"Black",
          "prod_description":"Bracelet for girls in affordable price"
        },
        {
          "product_image":"bedroom/bed4.png",
          "sale_price":"1499",
          "original_price":"2999",
          "discount":"75",
          "product_name":"Spacious bedroom",
          "color":"Brown",
          "prod_description":"Brown pure leather purse"
        },
        {
          "product_image":"bedroom/bed5.png",
          "sale_price":"399",
          "original_price":"799",
          "discount":"40",
          "product_name":"Biege themed bedroom",
          "color":"Golden",
          "prod_description":"Golden phone case for iPhone"
        },
        {
          "product_image":"bedroom/bed6.png",
          "sale_price":"249",
          "original_price":"599",
          "discount":"60",
          "product_name":"Master bedroom",
          "color":"Multi-coloured",
          "prod_description":"Multi-colored short earings"
        },
        {
          "product_image":"bedroom/bed7.png",
          "sale_price":"1399",
          "original_price":"1899",
          "discount":"30",
          "product_name":"Bedroom",
          "color":"Green",
          "prod_description":"Earpods with classy look"
        },
        {
          "product_image":"bedroom/bed8.png",
          "sale_price":"1499",
          "original_price":"2999",
          "discount":"75",
          "product_name":"Bedroom with single bed",
          "color":"Brown",
          "prod_description":"Brown pure leather purse"
        },
        {
          "product_image":"bedroom/bed9.png",
          "sale_price":"399",
          "original_price":"799",
          "discount":"40",
          "product_name":"Spacious bedroom",
          "color":"Golden",
          "prod_description":"Golden phone case for iPhone"
        },
        {
          "product_image":"bedroom/bed10.png",
          "sale_price":"249",
          "original_price":"599",
          "discount":"60",
          "product_name":"Kids bedroom",
          "color":"Multi-coloured",
          "prod_description":"Multi-colored short earings"
        },
        {
          "product_image":"bedroom/bed11.png",
          "sale_price":"1399",
          "original_price":"1899",
          "discount":"30",
          "product_name":"Master bedroom",
          "color":"Green",
          "prod_description":"Earpods with classy look"
        }
      ];

      this.category_type=[
        {name: 'Type'},
        {name: 'Beds & Headboards'},
        {name: 'Bedside Tables'},
        {name: 'Chests of Drawers'},
        {name: 'Wardrobes'}
      ]
    }
    else if(this.room_type == 'living room')
    {
      this.product_list = [
        {
          "product_image":"living-room/living1.png",
          "sale_price":"449",
          "original_price":"999",
          "discount":"50",
          "product_name":"Spacious living room",
          "color":"Black",
          "prod_description":"Black watch with round dial"
        },
        {
          "product_image":"living-room/living2.png",
          "sale_price":"449",
          "original_price":"999",
          "discount":"50",
          "product_name":"Cozy living room",
          "color":"Brown",
          "prod_description":"Brown watch with bamboo touch"
        },
        {
          "product_image":"living-room/living3.png",
          "sale_price":"99",
          "original_price":"299",
          "discount":"75",
          "product_name":"Affordable living room",
          "color":"Black",
          "prod_description":"Bracelet for girls in affordable price"
        },
        {
          "product_image":"living-room/living4.png",
          "sale_price":"1499",
          "original_price":"2999",
          "discount":"75",
          "product_name":"Blue themed living room",
          "color":"Brown",
          "prod_description":"Brown pure leather purse"
        },
        {
          "product_image":"living-room/living5.png",
          "sale_price":"399",
          "original_price":"799",
          "discount":"40",
          "product_name":"Living room",
          "color":"Golden",
          "prod_description":"Golden phone case for iPhone"
        },
        {
          "product_image":"living-room/living6.png",
          "sale_price":"249",
          "original_price":"599",
          "discount":"60",
          "product_name":"Large living room",
          "color":"Multi-coloured",
          "prod_description":"Multi-colored short earings"
        },
        {
          "product_image":"living-room/living7.png",
          "sale_price":"1399",
          "original_price":"1899",
          "discount":"30",
          "product_name":"Rounded living room",
          "color":"Green",
          "prod_description":"Earpods with classy look"
        },
        {
          "product_image":"living-room/living8.png",
          "sale_price":"249",
          "original_price":"599",
          "discount":"60",
          "product_name":"Black themed living room",
          "color":"Multi-coloured",
          "prod_description":"Multi-colored short earings"
        },
        {
          "product_image":"living-room/living9.png",
          "sale_price":"1399",
          "original_price":"1899",
          "discount":"30",
          "product_name":"Warm living room",
          "color":"Green",
          "prod_description":"Earpods with classy look"
        },
        {
          "product_image":"living-room/living10.png",
          "sale_price":"249",
          "original_price":"599",
          "discount":"60",
          "product_name":"Classy living room",
          "color":"Multi-coloured",
          "prod_description":"Multi-colored short earings"
        },
        {
          "product_image":"living-room/living11.png",
          "sale_price":"1399",
          "original_price":"1899",
          "discount":"30",
          "product_name":"Furnished living room",
          "color":"Green",
          "prod_description":"Earpods with classy look"
        }
      ];

      this.category_type=[
        {name: 'Type'},
        {name: 'Coffee & Side tables'},
        {name: 'ArmChairs'},
        {name: 'Sofas'},
        {name: 'Accessories & Decor'}
      ];
    }
    else
    {
      this.product_list = [
        {
          "product_image":"living-room/living1.png",
          "sale_price":"449",
          "original_price":"999",
          "discount":"50",
          "product_name":"Spacious living room",
          "color":"Black",
          "prod_description":"Black watch with round dial"
        },
        {
          "product_image":"bedroom/bed11.png",
          "sale_price":"1399",
          "original_price":"1899",
          "discount":"30",
          "product_name":"Master bedroom",
          "color":"Green",
          "prod_description":"Earpods with classy look"
        },
        {
          "product_image":"bathroom/bath4.png",
          "sale_price":"1499",
          "original_price":"2999",
          "discount":"75",
          "product_name":"Black themed bathroom",
          "color":"Brown",
          "prod_description":"Brown pure leather purse"
        },
        {
          "product_image":"living-room/living4.png",
          "sale_price":"1499",
          "original_price":"2999",
          "discount":"75",
          "product_name":"Blue themed living room",
          "color":"Brown",
          "prod_description":"Brown pure leather purse"
        },
        {
          "product_image":"kitchen/kit2.png",
          "sale_price":"449",
          "original_price":"999",
          "discount":"50",
          "product_name":"U shaped kitchen",
          "color":"Brown",
          "prod_description":"Brown watch with bamboo touch"
        },
        {
          "product_image":"bedroom/bed10.png",
          "sale_price":"249",
          "original_price":"599",
          "discount":"60",
          "product_name":"Kids bedroom",
          "color":"Multi-coloured",
          "prod_description":"Multi-colored short earings"
        },
        {
          "product_image":"living-room/living7.png",
          "sale_price":"1399",
          "original_price":"1899",
          "discount":"30",
          "product_name":"Rounded living room",
          "color":"Green",
          "prod_description":"Earpods with classy look"
        },
        {
          "product_image":"bathroom/bath1.png",
          "sale_price":"449",
          "original_price":"999",
          "discount":"50",
          "product_name":"Classy bathroom",
          "color":"Black",
          "prod_description":"Black watch with round dial"
        },
        {
          "product_image":"kitchen/kit3.png",
          "sale_price":"99",
          "original_price":"299",
          "discount":"75",
          "product_name":"Centred kitchen",
          "color":"Black",
          "prod_description":"Bracelet for girls in affordable price"
        },
        {
          "product_image":"living-room/living10.png",
          "sale_price":"249",
          "original_price":"599",
          "discount":"60",
          "product_name":"Classy living room",
          "color":"Multi-coloured",
          "prod_description":"Multi-colored short earings"
        },
        {
          "product_image":"bedroom/bed2.png",
          "sale_price":"449",
          "original_price":"999",
          "discount":"50",
          "product_name":"Wooden bedroom",
          "color":"Brown",
          "prod_description":"Brown watch with bamboo touch"
        },
      ];

      this.category_type=[
        {name: 'Type'},
        {name: 'Dining Chairs'},
        {name: 'Dining Tables'},
        {name: 'Bar Stools'},
        {name: 'Kitchen & Dining Furniture'},
        {name: 'Coffee & Side tables'},
        {name: 'ArmChairs'},
        {name: 'Sofas'},
        {name: 'Accessories & Decor'},
        {name: 'Bathroom Cabinets'},
        {name: 'Bathroom Accessories'},
        {name: 'Bathroom Vanity Units'},
        {name: 'Bathroom Mirrors'},
        {name: 'Dining Chairs'},
        {name: 'Dining Tables'},
        {name: 'Bar Stools'},
        {name: 'Kitchen & Dining Furniture'}
      ]
    } 
  }

  roomType(type:any)
  {
    localStorage.setItem('room-type',type);
    this.router.navigate(['gallery/' + type]) .then(() => window.location.reload());
  }

}
