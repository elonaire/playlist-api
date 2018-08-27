import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  details: Object;

  constructor(private route: ActivatedRoute, private data: DataService) { }

  getArtistDetails(id){
    this.data.getArtist(id)
    .subscribe(res=>{
      console.log(res);
      this.details = res;
    });
  }

  ngOnInit() {
    this.getArtistDetails(this.route.snapshot.params['id']);
  }

}
