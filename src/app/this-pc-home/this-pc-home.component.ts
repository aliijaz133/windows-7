import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'this-pc-home',
  templateUrl: './this-pc-home.component.html',
  styleUrls: ['./this-pc-home.component.scss']
})
export class ThisPcHomeComponent {

  constructor(private router: Router) { }

  getHomePage() {
    this.router.navigate(['this-pc-home']);
  }

}
