import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curator-dash',
  templateUrl: './curator-dash.component.html',
  styleUrls: ['./curator-dash.component.scss']
})
export class CuratorDashComponent implements OnInit {
  private details: Object;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigateByUrl('/curator/dashboard');
  }

  logOut() {
    this.router.navigateByUrl('/');
  }

}
