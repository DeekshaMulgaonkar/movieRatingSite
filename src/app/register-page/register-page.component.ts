import { Component, OnInit } from '@angular/core';
import { LOGDETAILS } from '../login-details';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  loginData = LOGDETAILS;
  constructor(private router: Router ) { }
  submit(name, email, pswrd){
    //check if any field is empty
    if(name === '' || email === '' || pswrd === ''){
      alert("Please Fill All the Fields");
    }
    else{
      let setName = sessionStorage.setItem('name', name);//storing in session storage
      let setEmail = sessionStorage.setItem('email', email);
      let setPass = sessionStorage.setItem('password', pswrd);
      let getName = sessionStorage.getItem('name'); // retrive back from session storage
      let getEmail = sessionStorage.getItem('email');
      let getPass = sessionStorage.getItem('password');
      let sendData = {        //storing in an object
            name : getName,
            email: getEmail,
            password: getPass
          }
      let getData = this.loginData.push(sendData); //pushing that object into an array
      this.router.navigateByUrl('/login'); //navigate to login page to login with the new credentials
    }
    
  }

  ngOnInit() {
  }

}
