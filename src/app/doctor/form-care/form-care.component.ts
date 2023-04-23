import { Component, EventEmitter, Input, Output } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { treatModel } from 'src/app/treat.model';
import { TreatsService } from 'src/app/treats.service';

@Component({
  selector: 'form-care',
  templateUrl: './form-care.component.html',
  styleUrls: ['./form-care.component.css']
})
export class FormCareComponent {

  constructor(private route: Router, private treatService: TreatsService) { }
  kinds: string[] = ["שיננית", "קיבוע", "סתימה"];
  days: number[] = [1, 2, 3, 4, 5, 6];
  hours: string[] = ["13:00","14:00","15:00","16:00","17:00"];
  dayS: string[] = ["חמישי","ראשון","שני","שלישי","רביעי"];
  @Input()
  treat: treatModel = <treatModel>{};

  @Output()
  onAdd: EventEmitter<treatModel> = new EventEmitter<treatModel>();
  
  userForm: FormGroup = new FormGroup(
    {
      "kind": new FormControl("", [Validators.required]),
      "day": new FormControl("", [Validators.required]),
      "dayS": new FormControl("", [Validators.required]),
      "hour": new FormControl("", [Validators.required]),
      "tzPatient": new FormControl("", [Validators.required]),
    })

  
  keep(): void {

    var current: treatModel = {
      id: this.treat.id ,
      kind: this.userForm.controls['kind'].value,
      day: Number(this.userForm.controls['day'].value),
      dayS: this.userForm.controls['dayS'].value,
      hour: this.userForm.controls['hour'].value,
      idDoctor: this.treat.idDoctor,
      tzPatient: this.userForm.controls['tzPatient'].value,
    }

     this.treatService.Add(current);
    this.onAdd.emit()

  }

}
