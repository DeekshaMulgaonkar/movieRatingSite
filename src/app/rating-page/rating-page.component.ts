import { Component, OnInit, Input } from '@angular/core';
import { MOVIE } from '../data';
import { Data } from '../mock-data'
import { routes } from '../app-routing.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rating-page',
  templateUrl: './rating-page.component.html',
  styleUrls: ['./rating-page.component.css']
})
export class RatingPageComponent implements OnInit {
  values = MOVIE;
  index : any;
 
  constructor(private router: Router) { }
  //login Button
  submit(e, rateValue){
    e.preventDefault();
    sessionStorage.setItem('rate', rateValue);
    let val = sessionStorage.getItem('rate');
    // check if value entered is within 0-5
    if(parseInt(val) > 5 || parseInt(val) < 0){
      alert("Try again, Enter a valid Number");
    } else {
        let locationStr = window.location.href;
        let getLocation = locationStr.split("/");
        let getLengthLocation = getLocation.length;
        this.index = getLocation[getLengthLocation-1];
        let updateRating = this.values[this.index-1].rating.push(parseInt(val));
    }
  
  }
  if(requiresLogin){
    this.router.navigate(['login-data']);
  }

  //checking the rating value
  onKey(e, value){
    if(value > 5 || value < 0){
      alert("please enter value between 0-5");
    }
  }
  ngOnInit() {
   
  }

}
