import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private data: AuthService){}

  ngOnInit(){
    this.data.getLogin();
  }
}
