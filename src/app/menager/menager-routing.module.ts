import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUserComponent } from './form-user/form-user.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
 {
   path:'',
   component:UserListComponent
 },
 {
   path:'form-user',
   component:FormUserComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenagerRoutingModule { }
