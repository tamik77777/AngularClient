import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Guard } from './guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
   path:'menager/:id',
   loadChildren: ()=> import('./menager/menager.module').then(m => m.MenagerModule)

  },
  {
    path:'doctor/:id',
    loadChildren: ()=> import('./doctor/doctor.module').then(m => m.DoctorModule)
 
   },
   {
    path:'secretary/:id',
    loadChildren: ()=> import('./secretary/secretary.module').then(m => m.SecretaryModule),
    canActivate:[Guard]
 
   }
   
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
