import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserAuthService } from '../../Service/user-auth.service';

@Component({
  selector: 'app-user-auth',
  imports: [FormsModule],
  templateUrl: './user-auth.component.html',
  styleUrl: './user-auth.component.css'
})
export class UserAuthComponent  implements OnInit {
  userLog:boolean=true;
  email: string = '';
  password: string = '';
constructor( private userAuth:UserAuthService){}
  ngOnInit(): void {
// this.userLog= this.userAuth.isUserLogged;
  }login() {
    this.userAuth.login(this.email, this.password);
    this.userLog = this.userAuth.isUserLogged;
  }
  logout()
  {
    this.userAuth.logout();
    this.userLog= this.userAuth.isUserLogged;

  }
}
