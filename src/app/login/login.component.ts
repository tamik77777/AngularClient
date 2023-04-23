
import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userModel } from '../user.model';
import { UserService } from '../user.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService,private route:Router) { }

  ngOnInit(): void {

  }
  user: userModel | undefined;
  password:string|undefined;
  userName:string|undefined;
  isExists:boolean|undefined;
  Id:string|undefined;
  currentUser:userModel|undefined;

  directiveColor: string = '';
  string : string=""
  check():void{
    this.isExists=true;
     for (let index = 0; index < this.userService.users.length; index++) {
      const element = this.userService.users[index];
        this.Id=element.id;
       if(this.userService.users[index].password==this.password && this.userService.users[index].userName==this.userName)
       {
        this.currentUser=element;
        if(this.currentUser.num==1)
           this.route.navigate([`/menager/${this.currentUser.id}`]);
       else if(this.currentUser.num==2)
        this.route.navigate([`/doctor/${this.currentUser.id}`]);
       else if(this.currentUser.num==3)
          this.route.navigate([`/secretary/${this.currentUser.id}`]);
          else
          this.isExists=false;
       }
     }
  }
}
