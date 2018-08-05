import { Component, OnInit, Input } from '@angular/core';
import { MOVIE } from '../data';
import { LOGDETAILS} from '../login-details';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-data',
  templateUrl: './login-data.component.html',
  styleUrls: ['./login-data.component.css'],
})
export class LoginDataComponent implements OnInit {
  
  constructor(private router: Router) { }
  values = MOVIE;
  rate : any;
  rateArrayLength : any;
  loginValues = LOGDETAILS;
  userLogged = false;

//find avg of rating array
  avgRating(avg) {
      this.rate = avg.reduce((a, b) => a + b, 0);
      this.rateArrayLength = avg.length;
      return this.rate/this.rateArrayLength;
  }

 // authenticate login
  login(email,pswrd){
      if(email === '' || pswrd === ''){
        alert("Please Fill All the Fields");
      } else {
        for(let i=0; i< this.loginValues.length; i++){
          if(this.loginValues[i].email === email && this.loginValues[i].password === pswrd){
            this.userLogged = true;
          }
        }
        //only registered users allowed to rate
        if(this.userLogged){
          this.router.navigateByUrl('/dashboard');
        } else {
          alert("Invalid password/emailID, Try Again");
        }
      }
  }

  //search by names
   searchByname(){
      let input, filter, table, tr, td, i;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      table = document.getElementById("myTable");
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }       
      }
  }

  ngOnInit() {

  }

}
