import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = "jacob@gmail.com";
  password: string = "123456";
  signIn: boolean = true;
  error: string;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signUp() {
    this.authService.signUp(this.email, this.password).subscribe( (value) => {
      this.email = this.password = '';   
      this.router.navigate(['home'])
    },
    (err) => {
      this.error = err.message;
    });
    
  }

  login() {
    
    console.log("attempting to login using", this.email, this.password);
    this.authService.login(this.email, this.password).subscribe( (value) => {
      this.email = this.password = '';   
      this.router.navigate(['home'])
    }, 
    (err) => {
      this.error = err.message;
    });
    
  }

  toggleSignInUp() {
    this.signIn = ! this.signIn;
  }
}
