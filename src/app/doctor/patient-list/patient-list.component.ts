import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { patientModel } from 'src/app/patient.model';
import { PatientService } from 'src/app/patient.service';
import { treatModel } from 'src/app/treat.model';
import { TreatsService } from 'src/app/treats.service';

@Component({
  selector: 'patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  idDoctor:string|undefined;
  patients:patientModel[]=[];
  flagAdd:boolean|undefined;
  flagCare:boolean|undefined;
  treats:treatModel[]=[];
   constructor(private patientService:PatientService,private treatService :TreatsService,private route:Router )
   {
     this.patients=patientService.get();
     this.treatService.getTreatsFromServer().subscribe(res => this.treats = res);
   }
  ngOnInit(){
    
   }
   selectedTreat:treatModel|undefined;
   userForm:FormGroup=new FormGroup(
    {
      "id":new FormControl("",[Validators.required]),
      "name":new FormControl("",[Validators.required]),
      "pel":new FormControl("",[Validators.required]),
      "address":new FormControl("",[Validators.required]),
      "kind":new FormControl("",[Validators.required]),
      "num":new FormControl("",[Validators.required]),
    })
    
   addPatient():void{
     this.flagAdd=true;
   }
   keep():void{
    var current :patientModel={ id:this.userForm.controls['id'].value,name:this.userForm.controls['name'].value,pel:this.userForm.controls['pel'].value,
    address:this.userForm.controls['address'].value,num:this.userForm.controls['num'].value,kind:this.userForm.controls['kind'].value}
    this.patientService.Add(current);

   }
  
   deletePatient(patient:patientModel):void{
    this.patientService.Delete(patient);
    }

    get(){
      this.route.navigate(['doctor/'+1+'/all-treatment']);
    }
    update(treat:treatModel):void{
      var current :treatModel={id:treat.id,kind:treat.kind,day:treat.day,dayS:treat.dayS,hour:treat.hour,idDoctor:treat.idDoctor,tzPatient:treat.tzPatient}
      this.selectedTreat=current;
   
      // this.route.navigate(['form-care']);
    }
    // hideForm(){
    //   this.selectedTreat=undefined;
    // }
}
