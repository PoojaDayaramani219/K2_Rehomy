import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-career-opportunities',
  templateUrl: './career-opportunities.component.html',
  styleUrls: ['./career-opportunities.component.scss']
})
export class CareerOpportunitiesComponent implements OnInit {

  career_opportunities:Array<any> = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.career_opportunities=[
      {
        "icon":"fa-lightbulb",
        "name":"Opportunity",
        "detail":"Manage the successful completion of projects from end to end. An appropriate or favorable time or occasion: Their meeting afforded an opportunity to exchange views."
      },
      {
        "icon":"fa-screwdriver-wrench",
        "name":"Report",
        "detail":"Establish excellent communications between internal / external teams and customers. A document that tells you what you need to know about the house. It's split into three parts – a single survey and valuation."
      },
      {
        "icon":"fa-list-check",
        "name":"Happy customers",
        "detail":"Delight customers and continually enhance the reputation of Refresh. Our commitment to each and every customer can be seen in their homes"
      },
      {
        "icon":"fa-shield-heart",
        "name":"Secure future",
        "detail":"Establish a team and reputation that trades and specifiers want to be associated with.Living A Better Life By Planning A Secure Future · Their plan creates mental clarity and peace of mind about the future."
      },
    ];
  }

  roomType(type:any)
  {
      localStorage.setItem('room-type',type);
      this.router.navigate(['gallery/' + type]); 
  }

}
