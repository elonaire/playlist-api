import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curator-auth',
  templateUrl: './curator-auth.component.html',
  styleUrls: ['./curator-auth.component.scss']
})
export class CuratorAuthComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  onFormSubmit(){
    this.router.navigateByUrl('/curator');
  }

}
