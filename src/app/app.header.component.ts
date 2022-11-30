import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AppComponent} from './app.component';

@Component({
  selector: 'app-header',
  templateUrl: './app.header.component.html'
})
export class AppHeaderComponent {
  constructor(public app: AppComponent,
    private router:Router) {}

  login() {
    this.router.navigate(['login']);
  }

  register() {
    this.router.navigate(['register']);
  }
}
