import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-auth',
  templateUrl: './artist-auth.component.html',
  styleUrls: ['./artist-auth.component.scss']
})
export class ArtistAuthComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  onFormSubmit(){
    this.router.navigateByUrl('/artist');
  }

}
