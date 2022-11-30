import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  roomType(type:any)
  {
      localStorage.setItem('room-type',type);
      this.router.navigate(['gallery/' + type]); 
  }

}
