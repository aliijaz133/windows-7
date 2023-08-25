import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'desktop-app';
  now!: number;
  constructor() {
    setInterval(() => {
      this.now = Date.now();
    }, 1);

  }

  ngOnInit(): void {

  }
}
