import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreatmentComponent } from './treatment/treatment.component';
import { DoctorRoutingModule } from './doctor-routing.module';
import { FormCareComponent } from './form-care/form-care.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AllTreatmentComponent } from './all-treatment/all-treatment.component';
import { ScheduleComponent } from './schedule/schedule.component';


@NgModule({
  declarations: [
    TreatmentComponent,
    FormCareComponent,
    PatientListComponent,
    AllTreatmentComponent,
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    ReactiveFormsModule,
   
  ],
  exports:[
    TreatmentComponent
  ]
})
export class DoctorModule { }
