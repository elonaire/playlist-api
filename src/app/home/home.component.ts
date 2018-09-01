import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUrl: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigateByUrl('/home/artistauth');
  }

}
