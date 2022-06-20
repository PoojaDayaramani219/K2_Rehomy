import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rehomy-tv',
  templateUrl: './rehomy-tv.component.html',
  styleUrls: ['./rehomy-tv.component.scss']
})
export class RehomyTvComponent implements OnInit {

  visibleMember: number;
  rehomy_video_library: Array<any> = [];
  images: any[];
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
  constructor(
    private scroller: ViewportScroller,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.rehomy_video_library = [
      {
        "name": "Stunning Modern Home Renovation | Before and After House Tour",
        "status": "ReHomy",
        "video_url": "https://www.youtube.com/embed/xMb1QBUlBF4",
      },
      {
        "name": "Stunning Modern Home Renovation | Before and After House Tour",
        "status": "ReHomy",
        "video_url": "https://www.youtube.com/embed/H-fEDunJbdA",
      },
      {
        "name": "Stunning Modern Home Renovation | Before and After House Tour",
        "status": "ReHomy",
        "video_url": "https://www.youtube.com/embed/H-fEDunJbdA",
      },
      {
        "name": "Stunning Modern Home Renovation | Before and After House Tour",
        "status": "ReHomy",
        "video_url": "https://www.youtube.com/embed/xMb1QBUlBF4",
      },
      {
        "name": "Stunning Modern Home Renovation | Before and After House Tour",
        "status": "ReHomy",
        "video_url": "https://www.youtube.com/embed/H-fEDunJbdA",
      },
      {
        "name": "Stunning Modern Home Renovation | Before and After House Tour",
        "status": "ReHomy",
        "video_url": "https://www.youtube.com/embed/xMb1QBUlBF4",
      },
      {
        "name": "Stunning Modern Home Renovation | Before and After House Tour",
        "status": "ReHomy",
        "video_url": "https://www.youtube.com/embed/H-fEDunJbdA",
      },
      {
        "name": "Stunning Modern Home Renovation | Before and After House Tour",
        "status": "ReHomy",
        "video_url": "https://www.youtube.com/embed/xMb1QBUlBF4",
      },
      {
        "name": "Stunning Modern Home Renovation | Before and After House Tour",
        "status": "ReHomy",
        "video_url": "https://www.youtube.com/embed/H-fEDunJbdA",
      }
  
    ];
    this.images = [
      {
      "previewImageSrc": "assets/images/featured_articles/kitchen-dimension.png",
      "thumbnailImageSrc": "assets/images/featured_articles/kitchen-dimension.png",
      "name": "Kitchen Dimension",
      },
      {
      "previewImageSrc": "assets/images/featured_articles/interior-design.png",
      "thumbnailImageSrc": "assets/images/featured_articles/interior-design.png",
      "name": "Interior Design",
      },
      {
      "previewImageSrc": "assets/images/featured_articles/pooja-room.png",
      "thumbnailImageSrc": "assets/images/featured_articles/pooja-room.png",
      "name": "Pooja Room",
      },
      {
      "previewImageSrc": "assets/images/featured_articles/kitchen-dimension.png",
      "thumbnailImageSrc": "assets/images/featured_articles/kitchen-dimension.png",
      "name": "Kitchen Dimension",
      },
      {
      "previewImageSrc": "assets/images/featured_articles/interior-design.png",
      "thumbnailImageSrc": "assets/images/featured_articles/interior-design.png",
      "name": "Interior Design"
      },
    ];
  }
  servicesDiv() {
    this.scroller.scrollToAnchor("services_section");
  }

  corporateDiv() {
    this.scroller.scrollToAnchor("corporate_section");
  }

  resourceDiv() {
    this.scroller.scrollToAnchor("resources_section");
  }

  pricingDiv() {
    this.scroller.scrollToAnchor("pricing_section");
  }

  contactDiv() {
    this.scroller.scrollToAnchor("contact_section");
  }

  login() {
    this.router.navigate(['login']);
  }

  register() {
    this.router.navigate(['register']);
  }

}
