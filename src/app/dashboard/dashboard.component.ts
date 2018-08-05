import { Component, OnInit } from '@angular/core';
import { MOVIE } from '../data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  values = MOVIE;
  rate : any;
  rateArrayLength : any;

  constructor() { }
//find the avg of rating array
  avgRating(avg) {
    this.rate = avg.reduce((a, b) => a + b, 0);
    this.rateArrayLength = avg.length;
    return this.rate/this.rateArrayLength;
  }
  
  ngOnInit() {
  }

}
