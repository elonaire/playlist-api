import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-artist-dash',
  templateUrl: './artist-dash.component.html',
  styleUrls: ['./artist-dash.component.scss']
})
export class ArtistDashComponent implements OnInit {
  private details: Object;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigateByUrl('/artist/dashboard')
  }

  logOut() {
    this.router.navigateByUrl('/');
  }

}
