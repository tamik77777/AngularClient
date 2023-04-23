import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-patient',
  templateUrl: './form-patient.component.html',
  styleUrls: ['./form-patient.component.css']
})
export class FormPatientComponent {

  userForm:FormGroup=new FormGroup(
    {
      "id":new FormControl("",[Validators.required]),
      "name":new FormControl("",[Validators.required]),
      "pel":new FormControl("",[Validators.required]),
      "address":new FormControl("",[Validators.required]),
      "kind":new FormControl("",[Validators.required]),
      "num":new FormControl("",[Validators.required]),
    })
   


  keep():void{


  }
}
