import { Injectable,NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userData: any; // Save logged in user data
  private loggedIn: boolean;
  ngOnInit(): void {
    this.loggedIn=false;
  }
  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    private router: Router,
    private auth: AngularFireAuth,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {    
  
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  // Sign in with email/password
  SignIn(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email,password)
    //return this.afAuth.auth().signInWithEmailAndPassword(email, password)
      .then((result) => {
        var elem = <HTMLInputElement> document.getElementById("volunteer");
        this.ngZone.run(() => {
          this.loggedIn = true;
          if(elem.checked)
            this.router.navigate(['./volunteer']);
          else 
            this.router.navigate(['./need-help']);
        });
        //this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  // Sign up with email/password
  SignUp(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        // this.SendVerificationMail();
        // this.SetUserData(result.user);
        var elem = <HTMLInputElement> document.getElementById("volunteer");
        this.ngZone.run(() => {
          this.loggedIn = true;
          if(elem.checked)
            this.router.navigate(['./volunteer']);
          else 
            this.router.navigate(['./need-help']);
        });
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    return this.loggedIn;
  }

  // // Auth logic to run auth providers
  // AuthLogin(provider) {
  //   return this.afAuth.auth.signInWithPopup(provider)
  //   .then((result) => {
  //      this.ngZone.run(() => {
  //         this.router.navigate(['dashboard']);
  //       })
  //     this.SetUserData(result.user);
  //   }).catch((error) => {
  //     window.alert(error)
  //   })
  // }

  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  // SetUserData(user) {
  //   const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
  //   const userData: User = {
  //     uid: user.uid,
  //     email: user.email,
  //     displayName: user.displayName,
  //     photoURL: user.photoURL,
  //     emailVerified: user.emailVerified
  //   }
  //   return userRef.set(userData, {
  //     merge: true
  //   })
  // }

  // Sign out 
  SignOut() {
    return firebase.auth().signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    })
  }
}
