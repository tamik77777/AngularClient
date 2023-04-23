import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenagerRoutingModule } from './menager-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { FormUserComponent } from './form-user/form-user.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserListComponent,
    FormUserComponent
  ],
  imports: [
    CommonModule,
    MenagerRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    UserListComponent
  ]
})
export class MenagerModule { }
