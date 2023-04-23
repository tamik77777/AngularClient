import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { userModel } from './user.model';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class Guard {

  currentId: string|undefined|null;
  users: userModel[] = []
  user:userModel|undefined;
  constructor(private usersService: UserService) {
    this.users = usersService.get();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.currentId = route.paramMap.get('id');
    console.log(this.currentId)
    var user = this.users.find(u => u.id === this.currentId)
   console.log(user?.userName)
    if (user?.userName=='shifi') {
      return true;
    }
    else{
        alert('shifi : הכניסה לדף המזכירה רק למשתמשים בשם משתמש')
        return false;
    }
    
  }

}
