import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  barchart = [];
  doughnutchart = [];

  playlist = [];
  followers = [];
  popularity = [];

  accepted = [];
  declined = [];
  noanswer = [];

  constructor() { }

  genData(x: number, y: number, lower: number, upper: number){
    let data = [];
    let randValue = null;
    for(var i = lower;i < upper;i++){
      randValue = Math.floor(Math.random()*x) + y;
      data.push(randValue);
    }

    return data;
  }

  ngOnInit() {
    this.playlist = this.genData(700,100,0,12);
    this.followers = this.genData(700,100,0,12);
    this.popularity = this.genData(700,100,0,12);

    this.accepted = this.genData(700,100,0,1);
    this.declined = this.genData(700,100,0,1);
    this.noanswer = this.genData(700,100,0,1);

    this.barchart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['January','February','March','April','May','June','July','August','September','October','November','December'],
        datasets: [
          {
            label: 'Playlist',
            data: this.playlist,
            backgroundColor: '#ff6384'
          },
          {
            label: 'Followers',
            data: this.followers,
            backgroundColor: '#cc65fe'
          },
          {
            label: 'Popularity',
            data: this.popularity,
            backgroundColor: '#ffce56'
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Statistics'
        }
      }
    });

    //Doughtnut
    this.doughnutchart = new Chart('canvas-two', {
      type: 'doughnut',
      data: {
        labels: ['Accepted', 'Declined', 'No Answer'],
        datasets: [
          {
            data: [this.accepted, this.declined, this.noanswer],
            backgroundColor: ['#ff6384','#cc65fe','#ffce56']
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Campaign Results'
        }
      }
    });
  }

}
