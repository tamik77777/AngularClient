// import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userModel } from 'src/app/user.model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  constructor(private route:Router,private userService:UserService){}



    ngOnInit():void{

    }
  
    userForm:FormGroup=new FormGroup(
    {
      "id":new FormControl("",[Validators.required,Validators.minLength(9),Validators.maxLength(9)]),
      "name":new FormControl("",[Validators.required]),
      "pel":new FormControl("",[Validators.required]),
      "address":new FormControl("",[Validators.required]),
      "password":new FormControl("",[Validators.required]),
      "userName":new FormControl("",[Validators.required]),
      "num":new FormControl("",[Validators.required]),
    })
   

    @Output()
    onAddUser:EventEmitter<userModel>=new EventEmitter<userModel>();
    
    
   add():void{
     var current :userModel={password:this.userForm.controls['password'].value,userName:this.userForm.controls['userName'].value,
    id:this.userForm.controls['id'].value,name:this.userForm.controls['name'].value,pel:this.userForm.controls['pel'].value,
    address:this.userForm.controls['address'].value,num:this.userForm.controls['num'].value}
     this.userService.Add(current);
     this.route.navigate(["/menager/"+1])
   }
}
