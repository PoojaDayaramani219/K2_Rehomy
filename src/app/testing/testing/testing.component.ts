import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, ConfirmEventType, MenuItem, MessageService, SelectItem } from 'primeng/api';
import { trigger, transition, animate, style } from '@angular/animations';
import { StorageService } from 'src/app/core/service/storage/storage.service';
import { HttpService } from 'src/app/core/service/http/http.service';
import { EndPoints, ApiMethod } from 'src/app/core/service/conts';
import { S3UtilService } from 'src/app/core/service/s3-util.service';
import { DomSanitizer } from '@angular/platform-browser';
import { PhotoService } from 'src/app/demo/service/photoservice';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],
  providers: [MessageService, ConfirmationService],
})

export class TestingComponent implements OnInit {
  modular_kitchen_list: Array<any> = [];
  images: any;
  multiple_kitchen:any=[];
  visible3:boolean = true;

  responsiveOptions:any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

  constructor(private photoService: PhotoService,private scroller: ViewportScroller) { }

  ngOnInit(): void {

    this.modular_kitchen_list=[
      {
        "name": "Martiz L-Shaped Henna Green Modular Kitchen",
        "size":" 10' x 10' "
      },
      {
        "name": "Martiz L-Shaped Henna Green Modular Kitchen",
        "size":" 7' "
      },
      {
        "name": "Martiz L-Shaped Henna Green Modular Kitchen",
        "size":" 8' "
      },
      {
        "name": "Trooper Blue L-Shaped Modular Kitchen",
        "size":" 10' x 10' "
      },
      {
        "name": "Martiz L-Shaped Henna Green Modular Kitchen",
        "size":" 9' "
      },
      {
        "name": "Martiz L-Shaped Henna Green Modular Kitchen",
        "size":" 7' "
      },
      {
        "name": "Purple Passion Straight Modular Kitchen",
        "size":" 12' "
      },
    ]

    this.multiple_kitchen = [
      {
        "image": "bathroom.png",
        "name": "bathroom",
      },
      {
        "image": "bedroom.png",
        "name": "bedroom",
      },
      {
        "image": "livingroom.png",
        "name": "living room",
      }
    ];


    this.photoService.getImages().then(images =>{ 
      this.images = images
    });
    
  }

  

  }
