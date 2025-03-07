import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  userBehaviourSubject:BehaviorSubject<boolean>;
  constructor() {
    this.userBehaviourSubject=new BehaviorSubject<boolean>(this.isUserLogged);
  }

  login(email: string, password: string){
    let token='usertoken';
    localStorage.setItem('token', token);
    this.userBehaviourSubject.next(true);
  }
  logout(){
    localStorage.removeItem('token');
    this.userBehaviourSubject.next(false);

  }

  get isUserLogged():boolean {
    return localStorage.getItem('token')?true:false;

  }

  // to dont refresh for change
  getUserLogStatus():Observable<boolean> {

    return this.userBehaviourSubject.asObservable();
  }
}
