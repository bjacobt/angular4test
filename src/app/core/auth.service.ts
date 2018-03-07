import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) { 
    this.user = firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          this.router.navigate(['home']);
        }
        else {
          this.userDetails = null;
        }
      }
    );
  }

  signUp(email: string, password: string) {
    return Observable.fromPromise(this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password));
  }

  login(email: string, password: string) {
    return Observable.fromPromise(this.firebaseAuth.auth.signInWithEmailAndPassword(email, password));
  }

  isLoggedIn() {
    if (this.userDetails === null ) {
        return false;
      } else {
        return true;
      }
    }

  logout() {
    this.firebaseAuth
      .auth
      .signOut().then( (res) => {
        this.router.navigateByUrl("/");
        this.userDetails = null;
      });
  }


}
