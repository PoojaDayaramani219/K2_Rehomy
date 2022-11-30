import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-opportunities',
  templateUrl: './business-opportunities.component.html',
  styleUrls: ['./business-opportunities.component.scss']
})
export class BusinessOpportunitiesComponent implements OnInit {
  business_opportunities:Array<any>=[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.business_opportunities=[
      {
        "icon":"fa-user-check",
        "name":"Work for yourself, not by yourself",
        "detail":"Have all the benefits for running your own business, with a low-risk career change.If you want to build a home today, only you can stop yourself."
      },
      {
        "icon":"fa-clipboard-list",
        "name":"Low start up and running costs",
        "detail":"No premises, equipment or material investment required.These costs include costs like startup insurance fees, legal fees, registration charges, accountant's fees, etc."
      },
      {
        "icon":"fa-house-laptop",
        "name":"Proven business model",
        "detail":"Our process is designed to reduce the common pitfalls in renovations such as budget-blowouts and timeline delays. We have engineered a very powerful model that combines a fully integrated software system, enabling Refresh franchisees to deliver the best customer experience and solve a massive problem for both homeowners and contractors."
      },
      {
        "icon":"fa-headset",
        "name":"Training & support",
        "detail":"We provide you with full training of our innovative IT-based business management systems and you will receive ongoing support across marketing and more from our franchise business support team."
      },
    ];
  }

  roomType(type:any)
  {
      localStorage.setItem('room-type',type);
      this.router.navigate(['gallery/' + type]); 
  }


}
