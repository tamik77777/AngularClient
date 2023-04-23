import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userModel } from 'src/app/user.model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {


  selectedUser: userModel | undefined;
  users: userModel[] = [];
  constructor(private userService: UserService, private route: Router) {
    this.users = userService.get();
  }
  currentUser: userModel | undefined;
  showUser(password: string): void {

    for (let index = 0; index < this.userService.users.length; index++) {
      const element = this.userService.users[index];
      if (this.userService.users[index].password == password) {
        this.currentUser = element;
        if (this.currentUser.num == 1)
          this.route.navigate(['/menager/' + this.currentUser.id]);
        else if (this.currentUser.num == 2)
          this.route.navigate(['/doctor/' + this.currentUser.id]);
        else if (this.currentUser.num == 3)
          this.route.navigate(['/secretary/' + this.currentUser.id]);

      }
    }
  }
  ToAdd(): void {
    this.route.navigate(['/menager/' + 1+ '/form-user'])
  }
  deleteUser(user: userModel): void {
    this.userService.Delete(user);
  }
  onAddUser(user: userModel): void {
    this.users.push(user);
  }


}
