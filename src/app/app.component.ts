import { Component } from '@angular/core';
import { Data } from './mock-data';
import { MOVIE } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MOVIE RATING';
  values = MOVIE;
  constructor (){}
  //sort By rating
  sortByRating(){
    this.values.sort(this.sortFunction);
  }

  sortFunction(a,b){
    let rate1 = a.rating.reduce((a,b) => a + b, 0);
    let resultRate1 = rate1/(a.rating.length);
    let rate2 = b.rating.reduce((a,b) => a + b, 0);
    let resultRate2 = rate2/(a.rating.length);
    let result = resultRate2 - resultRate1;
    return result;
  }

  //sort By release date
  sortByReleaseDate(){
    this.values.sort(this.sortDate);
  }

  sortDate(a,b){
    var dateA = new Date(a.releaseDate);
    var dateB = new Date(b.releaseDate);
    return dateA > dateB ? 1 : -1;
  }

  //sort by name
  sortByName(){
    this.values.sort(this.sortName);
  }

  sortName(a,b){
    var textA = a.name.toUpperCase();
    var textB = b.name.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  }

   ngOnInit(){
    
    }
 
  
}
