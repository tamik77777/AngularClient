import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTreatmentComponent } from './all-treatment/all-treatment.component';
import { FormCareComponent } from './form-care/form-care.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TreatmentComponent } from './treatment/treatment.component';


const routes: Routes = [
 {
   path:'',
   component:TreatmentComponent
 },
 {
   path:'patient-list',
   component:PatientListComponent
 },
 {
   path:'form-care',
   component:FormCareComponent
 }
 ,
 {
  path:'all-treatment',
  component:AllTreatmentComponent
}
,
{
  path:'schedule',
  component:ScheduleComponent 
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
