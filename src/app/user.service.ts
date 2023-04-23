import { Injectable } from '@angular/core';
import { userModel } from './user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  user:userModel | undefined;
  users: userModel[] = [

    {
      password: "1234",
      userName: "tami",
      id:'213177777',
      name:'tami',
      pel:'0583263844',
      address:"טיומקין 11",
      num: 1
    },
    {
      password: "2345",
      userName: "shani",
      id:'234278543',
      name:'shani',
      pel:'0583263844',
      address:"טיומקין 11",
      num: 2
    },
    {
      password: "2345",
      userName: "efrat",
      id:'234278548',
      name:'efrat',
      pel:'0583263844',
      address:"טיומקין 11",
      num: 2
    },
    {
      password: "3456",
      userName: "shifi",
      id:'348676555',
      name:'shifi',
      pel:'0583263844',
      address:"טיומקין 11",
      num: 3
    },
    {
      password: "4567",
      userName: "sari",
      id:'348676555',
      name:'shulamit',
      pel:'0583263844',
      address:"טיומקין 11",
      num: 3
    }
  ]
   get(){
     return this.users;
   }
   Add(user:userModel){
     console.log('userName',user.userName)
     this.users.push(user);
   }
   Delete(user:userModel){
    let index=this.users.indexOf(user);
    this.users.splice(index,1);
   }

}
