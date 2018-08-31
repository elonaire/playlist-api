import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toreview',
  templateUrl: './toreview.component.html',
  styleUrls: ['./toreview.component.scss']
})
export class ToreviewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigateByUrl('/curator/toreview/awaiting');
  }

}
