import { HttpClient } from '@angular/common/http';
import { Injectable ,inject} from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, from } from 'rxjs';
import {UserCredentialsLogin,UserCredentialsRegister} from "./../interface/user-credentials"
import { Auth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})


export class AuthService {

  private auth = inject(Auth);
 // this my server backend by node and express create for task it's more challange me to handle it with task front and thanks
 private loginUrl = 'https://nodeauthapiproduction.up.railway.app/api/v1/auth/login';
 private registerUrl = 'https://nodeauthapiproduction.up.railway.app/api/v1/auth/register';
 userActive = new BehaviorSubject('');
 constructor(private http: HttpClient,private router:Router) {
   const userToken = localStorage.getItem('user');
   if (userToken) {
     this.userActive.next(userToken);
   }
 }

 login(loginData:UserCredentialsLogin) : Observable<any>{
  // const {email} = loginData.email;
  //  createUserWithEmailAndPassword(this.auth,loginData.email,loginData.password).then((userCredential)=>{
  //    const user = userCredential.user;
  //    console.log("user credential user",userCredential);
  //    console.log("user after login",user);
  //    return user;
  //   }).catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
      
  //   });
  return from(signInWithEmailAndPassword(this.auth,loginData.email,loginData.password));
  //  return this.http.post<any>(this.loginUrl, loginData);
 }

 register(registerData:UserCredentialsRegister): Observable<any> {
  return from(createUserWithEmailAndPassword(this.auth,registerData.email,registerData.password));
  //  return this.http.post<any>(this.registerUrl, registerData);
 }

 getStatusUser(): Observable<string > {
   return this.userActive.asObservable();
 }

 updateUserIsActive(token: string ) {
   if (token) {
     localStorage.setItem('user', token);
   } else {
     localStorage.removeItem('user');
   }
   this.userActive.next(token);
 }
 logout(){
   localStorage.removeItem("user");
   this.userActive.next('');
   this.router.navigate(['auth/login']);
 }
}
function form(arg0: Promise<void>) {
  throw new Error('Function not implemented.');
}

