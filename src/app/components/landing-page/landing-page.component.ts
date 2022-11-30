import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';
import { PhotoService } from 'src/app/demo/service/photoservice';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  room_ideas: Array<any> = [];
  latest_stories: Array<any> = [];
  style_list: Array<any> = [];
  rehomy_video_library: Array<any> = [];
  responsiveOptions: Array<any> =[];
  solutions:Array<any> = [];
  images: any;
  activeIndex: number = 0;
  items: { label: string; command: (event: any) => void; }[];

  constructor(
    private scroller: ViewportScroller,
    private router: Router,
    private photoService: PhotoService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
 
    this.items = [
      {
        label: "Initial Consultation",
        command: (event: any) => {
          this.activeIndex = 0;
          this.messageService.add({
            severity: "info",
            summary: "Engagement Matrix",
            detail: event.item.label
          });
        }
      },
      {
        label: "Concept and feasibilty",
        command: (event: any) => {
          this.activeIndex = 1;
          this.messageService.add({
            severity: "info",
            summary: "Seat Selection",
            detail: event.item.label
          });
        }
      },
      {
        label: "Working drawings and costing",
        command: (event: any) => {
          this.activeIndex = 2;
          this.messageService.add({
            severity: "info",
            summary: "Pay with CC",
            detail: event.item.label
          });
        }
      },
      {
        label: "Construction stage",
        command: (event: any) => {
          this.activeIndex = 3;
          this.messageService.add({
            severity: "info",
            summary: "Last Step",
            detail: event.item.label
          });
        }
      },
      {
        label: "Your finished home",
        command: (event: any) => {
          this.activeIndex = 4;
          this.messageService.add({
            severity: "info",
            summary: "Last Step",
            detail: event.item.label
          });
        }
      }
    ];
    
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  this.room_ideas = [
		{
			"image": "kitchen.png",
			"name": "kitchen",
		},
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
    },
    {
      "image": "diningroom.png",
      "name": "dining room",
    },
    {
      "image": "outdoor.png",
      "name": "outdoor",
    },
    {
      "image": "kidsroom.png",
      "name": "kids room",
    },
    {
      "image": "homeoffice.png",
      "name": "home office",
    },
    {
      "image": "wardrobe.png",
      "name": "wardrobe",
    },
    {
      "image": "exterior.png",
      "name": "exterior",
    },
    {
      "image": "entry.png",
      "name": "entry",
    },
    {
      "image": "homegym.png",
      "name": "home gym",
    },
    {
      "image": "homebar.png",
      "name": "home bar",
    },
    // {
    //   "image": "corridor.png",
    //   "name": "corridor",
    // },
    // {
    //   "image": "utilityroom.png",
    //   "name": "utility room",
    // },
    // {
    //   "image": "staircase.png",
    //   "name": "staircase",
    // },
  ];
  this.latest_stories = [
    // {
    //   "image": "kitchen-dimension.png",
    //   "name": "Top 10 Key Kitchen Dimensions You Need to Know",
    //   "status": "popular"
    // },
    {
      "image": "pooja-room.png",
      "name": "35 Serene Puja Room Designs",
      "status": "popular"
    },
    {
      "image": "dual-interior.png",
      "name": "Turn One Room Into Two With These Genius Ideas",
      "status": "popular"
    },
    {
      "image": "interior-design.png",
      "name": "What Are the Benefits of Hiring an Interior Designer?",
      "status": "popular"
    },
    {
      "image": "ideal-wardrobe.png",
      "name": "What Are the Ideal Wardrobe Measurements?",
      "status": "popular"
    },
    {
      "image": "combat-harsh-climate-house.png",
      "name": "These UK Homes Know How To Combat Harsh Climate",
      "status": "popular"
    },
    {
      "image": "right-architect.png",
      "name": "How to Find an Architect That's Right for You",
      "status": "popular"
    },
    {
      "image": "bathroom-renovation.png",
      "name": "Step-by-Step: A Guide to Renovating Your Bathroom",
      "status": "popular"
    },
    {
      "image": "best-sofa.png",
      "name": "30 Best Sofa Designs",
      "status": "popular"
    },
    {
      "image": "laundry.png",
      "name": "7 Stylish Ways to Dry Your Laundry In a Small Apartment",
      "status": "popular"
    },
    {
      "image": "homes.png",
      "name": "4 Amazing UK Homes Less Than 1000 Sq Ft",
      "status": "popular"
    },
    {
      "image": "kitchen-cabinate.png",
      "name": "What's the Best Material for Kitchen Cabinets?",
      "status": "popular"
    },
    {
      "image": "living-room-style.png",
      "name": "Design-Forward UK Living Rooms, Bedrooms & Kitchens",
      "status": "popular"
    },
    {
      "image": "glass-types.png",
      "name": "7 Types of Glass That Allow in Light & Privacy",
      "status": "popular"
    },
    {
      "image": "landscape-architecture.png",
      "name": "What is the Role of a Landscape Architect?",
      "status": "popular"
    },
  ];
  this.style_list = [
    {
      "image": "American.png",
      "name": "American",
    },
    {
      "image": "Asian.png",
      "name": "Asian",
    },
    {
      "image": "Indian.png",
      "name": "Indian",
    },
    {
      "image": "Contemporary.png",
      "name": "Contemporary",
    },
    {
      "image": "Modern.png",
      "name": "Modern",
    },
    {
      "image": "Eclectic.png",
      "name": "Eclectic",
    },
    {
      "image": "Coastal.png",
      "name": "Coastal",
    },
    {
      "image": "Industrial.png",
      "name": "Industrial",
    },
    {
      "image": "Mediterranean.png",
      "name": "Mediterranean",
    },
    {
      "image": "Scandinavian.png",
      "name": "Scandinavian",
    },
    {
      "image": "Shabby-Chic-Style.png",
      "name": "Shabby Chic Style",
    },
    {
      "image": "Transitional.png",
      "name": "Transitional",
    },
    {
      "image": "Tropical.png",
      "name": "Tropical",
    },
    {
      "image": "British-Colonial.png",
      "name": "British Colonial",
    },
  ];
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

  this.solutions=[
    {
      "icon":"fa-utensils",
      "title": "Kitchen",
      "subtitle":"The initial interior design consultation is when you meet with potential clients, learn more about their project needs and showcase your value as a home."
    },
    {
      "icon":"fa-bed",
      "title": "Bedroom",
      "subtitle":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      "icon":"fa-house-chimney-user",
      "title": "Renovation",
      "subtitle":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      "icon":"fa-sink",
      "title": "Plumbing",
      "subtitle":"Fermentum et sollicitudin ac orci phasellus egestas tellusrutrum tellus."
    },
    {
      "icon":"fa-paint-roller",
      "title": "Painting",
      "subtitle":"Nec tincidunt praesent semper feugiat. Sed adipiscing diamdonec adipiscing tristique risus nec feugiat."
    },
    {
      "icon":"fa-hammer",
      "title": "Construction",
      "subtitle":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
  ];

  this.images=[
      {
          "title": "Initial consultation",
          "subtitle":"The initial interior design consultation is when you meet with potential clients, learn more about their project needs and showcase your value as a home.Begin considering the budget from the very moment you start thinking about building your house. "
      },
      {
          "title": "Concept & feasibility",
          "subtitle":"Rehomy provide a full range of design expertise including early stage design work at project inception. Often required in a quick turnaround time. It takes you through a series of tests that help you determine whether your project concept is viable. "
      },
      {
          "title": "Working drawings & costing",
          "subtitle":"Working drawings provide dimensioned, graphical information that can be used; by a contractor to construct the works, or by suppliers to our clients. Based on the measurement, the building contractor will get only sufficient material to build the house and help the client save costs."
      },
      {
          "title": "Construction stage",
          "subtitle":"The Process of Building a house · 1. The Base Stage · 2. The Frame Stage · 3. The Lock-up/Enclosed Stage · 4. The Fixing and Fit-Off Stages · 5. Practical Completion.Every successful building project starts with a sturdy foundation."
      },
      {
          "title": "Your finished home",
          "subtitle":"It's worth taking your time to perfect the design and ensure the finished property will meet your needs. Little Touches That Will Make Your Home Look 'Finished'. "
      }
  ]
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

  see_all_articles() {
    this.router.navigate(['all-featured-articles']);
  }

  see_rehomy_library() {
    this.router.navigate(['rehomy-tv']);
  }

  roomType(type:any)
  {
      localStorage.setItem('room-type',type);
      this.router.navigate(['gallery/' + type]); 
  }

}
