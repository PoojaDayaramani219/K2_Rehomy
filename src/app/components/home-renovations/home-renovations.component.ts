import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-renovations',
  templateUrl: './home-renovations.component.html',
  styleUrls: ['./home-renovations.component.scss']
})
export class HomeRenovationsComponent implements OnInit {
  projects:Array<any> = [];
  isReadMore = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.projects=[
      {
        "icon":"1.png",
        "title":"Home wide",
        "subtitle":"Rehomy has the experience to ensure your home makeover looks fantastic and is delivered on time and on budget."
      },
      {
        "icon":"2.png",
        "title":"Design & planning",
        "subtitle":"Rehomy has the experience to ensure your home makeover looks fantastic and is delivered on time and on budget."
      },
      {
        "icon":"3.png",
        "title":"Bathroom renovations",
        "subtitle":"Rehomy has the experience to ensure your home makeover looks fantastic and is delivered on time and on budget."
      },
      {
        "icon":"10.png",
        "title":"Kitchen renovations",
        "subtitle":"Rehomy has the experience to ensure your home makeover looks fantastic and is delivered on time and on budget."
      },
      {
        "icon":"1.png",
        "title":"Home office",
        "subtitle":"Rehomy has the experience to ensure your home makeover looks fantastic and is delivered on time and on budget."
      },
      {
        "icon":"2.png",
        "title":"Roof extensions",
        "subtitle":"Rehomy has the experience to ensure your home makeover looks fantastic and is delivered on time and on budget."
      },
      {
        "icon":"3.png",
        "title":"Creative spaces",
        "subtitle":"Rehomy has the experience to ensure your home makeover looks fantastic and is delivered on time and on budget."
      },
      {
        "icon":"10.png",
        "title":"Additions & extensions",
        "subtitle":"Rehomy has the experience to ensure your home makeover looks fantastic and is delivered on time and on budget."
      },
      {
        "icon":"1.png",
        "title":"Indoor-outdoor flow",
        "subtitle":"Rehomy has the experience to ensure your home makeover looks fantastic and is delivered on time and on budget."
      },
      {
        "icon":"2.png",
        "title":"Garage conversions",
        "subtitle":"Rehomy has the experience to ensure your home makeover looks fantastic and is delivered on time and on budget."
      },
      {
        "icon":"3.png",
        "title":"Loft room conversions",
        "subtitle":"Rehomy has the experience to ensure your home makeover looks fantastic and is delivered on time and on budget."
      }

    ]
  }

  showText() {
    this.isReadMore = !this.isReadMore
  }

  roomType(type:any)
  {
      localStorage.setItem('room-type',type);
      this.router.navigate(['gallery/' + type]); 
  }



}
