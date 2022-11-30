import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AppComponent} from './app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './app.navbar.component.html'
})
export class AppNavbarComponent {
  constructor(public app: AppComponent,
    private router:Router) {}

    roomType(type:any)
    {
        localStorage.setItem('room-type',type);
        this.router.navigate(['gallery/' + type]); 
    }

}
