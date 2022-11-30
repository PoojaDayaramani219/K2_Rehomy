import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  images:Array<any>=[];

  constructor(private router: Router) { }

  ngOnInit(): void {

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
  ];

  }

  roomType(type:any)
  {
      localStorage.setItem('room-type',type);
      this.router.navigate(['gallery/' + type]); 
  }

}
