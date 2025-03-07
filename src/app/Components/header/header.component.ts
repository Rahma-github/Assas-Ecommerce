import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserAuthService } from '../../Service/user-auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  userLog: boolean = true;
constructor(private userAuth:UserAuthService){}
  ngOnInit(): void {
    this.userAuth.getUserLogStatus().subscribe({
      next:(status)=>{
        this.userLog = status;
      },error(err){
        console.log(err);

      }

    })

  }

}
