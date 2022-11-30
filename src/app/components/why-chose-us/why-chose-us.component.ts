import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-why-chose-us',
  templateUrl: './why-chose-us.component.html',
  styleUrls: ['./why-chose-us.component.scss']
})
export class WhyChoseUsComponent implements OnInit {
  why_chosing_list:Array<any> = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.why_chosing_list = [
      {
        "image": "1.png",
        "name": "We’re changing how the world renovates",
        "status": "popular",
        "theme_title": "Most Popular",
        "theme_link": "/all-featured-articles",
        "author_name": "Kole Balfour",
        "description": "We look to do things differently and have transformed the traditional renovation approach where the homeowner manages a builder, designer, consents, suppliers and co-ordinating trades. Instead, we are a design and build renovation company that works with you to reduce the risk of your project going over time and budget with a process which aligns trades, suppliers and designer relationships and getting all the necessary permits and compliances approved. Our secret is in the planning.",
        "detail":"Learn how we’re changing the way the world renovates",
        "view_detail_link": "/all-featured-articles",
        "comments_count": "10",
      },
      {
        "image": "2.png",
        "name": "Use a locally owned and operated renovation company",
        "status": "popular",
        "theme_title": "Most Popular",
        "theme_link": "/all-featured-articles",
        "author_name": "Kole Balfour",
        "description": "You will have one point of contact who manages all aspects of your project from planning to completion. Their goal is to create an exciting and stress-free experience by understanding your requirements, delivering a quality service through clear communication to you and the trades and then project managing the build.",
        "detail":"Find your local Rehomy Consultant",
        "view_detail_link": "/all-featured-articles",
        "comments_count": "1",
      },
      {
        "image": "3.png",
        "name": "Relax knowing you’re getting value from your budget",
        "status": "popular",
        "theme_title": "Most Popular",
        "theme_link": "/all-featured-articles",
        "author_name": "Kole Balfour",
        "description": "For renovations to run smoothly, they require expert planning and management. According to research company BRANZ*, 30% of a homeowner’s budget goes to waste in a typical renovation (that does not use Rehomy’s process). Rehomy’s processes and systems simplify the home renovation experience, allowing each stage to be carefully planned and managed. This creates a foundation for projects to be cost-effective and accurately priced from the start.",
        "detail":"Learn more about the Rehomy process",
        "view_detail_link": "/all-featured-articles",
        "comments_count": "2",
      },
      {
        "image": "4.png",
        "name": "You’ll always feel in Control",
        "status": "popular",
        "theme_title": "Most Popular",
        "theme_link": "/all-featured-articles",
        "author_name": "Kole Balfour",
        "description": "Rehomy’s online customer portal, Control, makes it easy for you to carry on with your daily routine while your home renovation is managed for you. You’ll be able to access an online dashboard providing live updates throughout the renovation process that you can check anytime, anywhere - even on holiday!",
        "detail":"Find out more about Rehomy's Customer Portal",
        "view_detail_link": "/all-featured-articles",
        "comments_count": "3",
      },
      {
        "image": "5.png",
        "name": "Create a home you’ll be proud of",
        "status": "popular",
        "theme_title": "Most Popular",
        "theme_link": "/all-featured-articles",
        "author_name": "Kole Balfour",
        "description": "Having worked with your renovation consultant throughout the planning stages and have now completed the build, it’s your time to put your feet up, relax and enjoy making memories in your updated home.",
        "detail":"Enquire now",
        "view_detail_link": "/all-featured-articles",
        "comments_count": "4",
      }
    ];
  }

  roomType(type:any)
  {
      localStorage.setItem('room-type',type);
      this.router.navigate(['gallery/' + type]); 
  }

}
