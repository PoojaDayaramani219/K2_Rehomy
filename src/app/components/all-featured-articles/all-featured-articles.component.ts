import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-featured-articles',
  templateUrl: './all-featured-articles.component.html',
  styleUrls: ['./all-featured-articles.component.scss']
})
export class AllFeaturedArticlesComponent implements OnInit {
  articles_nav_filtered_list: Array<any> = [];
  browse_articles_list: Array<any> = [];
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
  articles_banner: any;

  constructor(
    private scroller: ViewportScroller,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.articles_nav_filtered_list = [
      {
        name: 'Recent Ideabook',
        value: 'recent_ideabook',
        url: '/all-featured-articles'
      },
      {
        name: 'Most Popular',
        value: 'most_popular',
        url: '/all-featured-articles'
      },
      {
        name: 'Photo Books',
        value: 'photo_books',
        url: '/all-featured-articles'
      },
      {
        name: 'ReHomy Experts',
        value: 'rehomy_experts',
        url: '/all-featured-articles'
      },
      {
        name: 'Indian Homes',
        value: 'indian_homes',
        url: '/all-featured-articles'
      },
      {
        name: 'ReHomy Around UK',
        value: 'rehomy_around_uk',
        url: '/all-featured-articles'
      },
      {
        name: 'Architecture',
        value: 'architecture',
        url: '/all-featured-articles'
      },
      {
        name: 'Kitchen Guides',
        value: 'kitchen_guides',
        url: '/all-featured-articles'
      },
      {
        name: 'Bathrrom Guides',
        value: 'bathroom_guides',
        url: '/all-featured-articles'
      },
      {
        name: 'bedroom Guides',
        value: 'bedroom_guides',
        url: '/all-featured-articles'
      },
      {
        name: 'More Room Guides',
        value: 'more_room_guides',
        url: '/all-featured-articles'
      },
      {
        name: 'Outdoors',
        value: 'outdoors',
        url: '/all-featured-articles'
      },
      {
        name: 'Color Guides',
        value: 'color_guides',
        url: '/all-featured-articles'
      },
      {
        name: 'Lighting Ideas',
        value: 'lighting_ideas',
        url: '/all-featured-articles'
      },
      {
        name: 'Decorating Guides',
        value: 'decorating_guides',
        url: '/all-featured-articles'
      },
      {
        name: 'Life',
        value: 'life',
        url: '/all-featured-articles'
      },
      {
        name: 'ReHomy TV',
        value: 'rehomy_tv',
        url: '/all-featured-articles'
      },
      {
        name: 'Tips For Professional',
        value: 'tips_for_professional',
        url: '/all-featured-articles'
      }
    ];

    this.articles_banner = 'living-room-style.png';

    this.browse_articles_list = [
      {
        "image": "1.png",
        "name": "Top 10 Key Kitchen Dimensions You Need to Know",
        "status": "popular",
        "theme_title": "Most Popular",
        "theme_link": "/all-featured-articles",
        "author_name": "Kole Balfour",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "view_detail_link": "/all-featured-articles",
        "comments_count": "10",
      },
      {
        "image": "2.png",
        "name": "35 Serene Puja Room Designs",
        "status": "popular",
        "theme_title": "Most Popular",
        "theme_link": "/all-featured-articles",
        "author_name": "Kole Balfour",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "view_detail_link": "/all-featured-articles",
        "comments_count": "1",
      },
      {
        "image": "3.png",
        "name": "What Are the Benefits of Hiring an Interior Designer?",
        "status": "popular",
        "theme_title": "Most Popular",
        "theme_link": "/all-featured-articles",
        "author_name": "Kole Balfour",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "view_detail_link": "/all-featured-articles",
        "comments_count": "2",
      },
      {
        "image": "4.png",
        "name": "Turn One Room Into Two With These Genius Ideas",
        "status": "popular",
        "theme_title": "Most Popular",
        "theme_link": "/all-featured-articles",
        "author_name": "Kole Balfour",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "view_detail_link": "/all-featured-articles",
        "comments_count": "3",
      },
      {
        "image": "5.png",
        "name": "What Are the Ideal Wardrobe Measurements?",
        "status": "popular",
        "theme_title": "Most Popular",
        "theme_link": "/all-featured-articles",
        "author_name": "Kole Balfour",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "view_detail_link": "/all-featured-articles",
        "comments_count": "4",
      },
      {
        "image": "6.png",
        "name": "These UK Homes Know How To Combat Harsh Climate",
        "status": "popular",
        "theme_title": "Most Popular",
        "theme_link": "/all-featured-articles",
        "author_name": "Kole Balfour",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "view_detail_link": "/all-featured-articles",
        "comments_count": "5",
      },
      {
        "image": "7.png",
        "name": "How to Find an Architect That's Right for You",
        "status": "popular",
        "theme_title": "Most Popular",
        "theme_link": "/all-featured-articles",
        "author_name": "Kole Balfour",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "view_detail_link": "/all-featured-articles",
        "comments_count": "6",
      },
      {
        "image": "8.png",
        "name": "Step-by-Step: A Guide to Renovating Your Bathroom",
        "status": "popular",
        "theme_title": "Most Popular",
        "theme_link": "/all-featured-articles",
        "author_name": "Kole Balfour",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "view_detail_link": "/all-featured-articles",
        "comments_count": "7",
      },
      {
        "image": "9.png",
        "name": "30 Best Sofa Designs",
        "status": "popular",
        "theme_title": "Most Popular",
        "theme_link": "/all-featured-articles",
        "author_name": "Kole Balfour",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "view_detail_link": "/all-featured-articles",
        "comments_count": "8",
      },
      {
        "image": "10.png",
        "name": "7 Stylish Ways to Dry Your Laundry In a Small Apartment",
        "status": "popular",
        "theme_title": "Most Popular",
        "theme_link": "/all-featured-articles",
        "author_name": "Kole Balfour",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "view_detail_link": "/all-featured-articles",
        "comments_count": "9",
      },
      {
        "image": "11.png",
        "name": "4 Amazing UK Homes Less Than 1000 Sq Ft",
        "status": "popular",
        "theme_title": "Most Popular",
        "theme_link": "/all-featured-articles",
        "author_name": "Kole Balfour",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "view_detail_link": "/all-featured-articles",
        "comments_count": "10",
      },
      {
        "image": "12.png",
        "name": "What's the Best Material for Kitchen Cabinets?",
        "status": "popular",
        "theme_title": "Most Popular",
        "theme_link": "/all-featured-articles",
        "author_name": "Kole Balfour",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "view_detail_link": "/all-featured-articles",
        "comments_count": "11",
      },
      {
        "image": "13.png",
        "name": "Design-Forward UK Living Rooms, Bedrooms & Kitchens",
        "status": "popular",
        "theme_title": "Most Popular",
        "theme_link": "/all-featured-articles",
        "author_name": "Kole Balfour",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "view_detail_link": "/all-featured-articles",
        "comments_count": "12",
      },
      {
        "image": "14.png",
        "name": "7 Types of Glass That Allow in Light & Privacy",
        "status": "popular",
        "theme_title": "Most Popular",
        "theme_link": "/all-featured-articles",
        "author_name": "Kole Balfour",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "view_detail_link": "/all-featured-articles",
        "comments_count": "13",
      },
      {
        "image": "15.png",
        "name": "What is the Role of a Landscape Architect?",
        "status": "popular",
        "theme_title": "Most Popular",
        "theme_link": "/all-featured-articles",
        "author_name": "Kole Balfour",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "view_detail_link": "/all-featured-articles",
        "comments_count": "14",
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
