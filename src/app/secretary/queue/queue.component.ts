// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { treatModel } from 'src/app/treat.model';
// import { TreatsService } from 'src/app/treats.service';
// import { userModel } from 'src/app/user.model';
// import { UserService } from 'src/app/user.service';

// @Component({
//   selector: 'app-queue',
//   templateUrl: './queue.component.html',
//   styleUrls: ['./queue.component.css']
// })
// export class QueueComponent implements OnInit {
// // users:userModel[]=[];
//   constructor(private treatService:TreatsService,private userServise:UserService,private router: Router) 
//   { 
//     // this.users=userServise.get()
//   }
//   bool:boolean|undefined;
//   num:Number|undefined;
//   doctors:string[]=[]
//   ngOnInit(): void {
//   // for (let index = 0; index < this.userServise.users.length; index++) {
//   //     const element = this.userServise.users[index];
//   //     if(element.num==this.num)
//   //      this.doctors.push(element.id);
//   //    }

//   }
//   kinds: string[] = ["שיננית", "קיבוע", "סתימה"];
//   days:number[]=[1,2,3,4];
//   hours:string[]=["03:00"];
//   treat: treatModel = { id:1,kind: "", day:1,dayS:"sunday",hour:"13",idDoctor:"" ,tzPatient:""}
//   userForm: FormGroup = new FormGroup(
//     {
//       "id":new FormControl("", [Validators.required]),
//       "kind": new FormControl("", [Validators.required]),
//       "day": new FormControl("", [Validators.required]),
//       "dayS": new FormControl("", [Validators.required]),
//       "hour": new FormControl("", [Validators.required]),
//       "idDoctor":new FormControl("", [Validators.required]),
//       "tzPatient":new FormControl("", [Validators.required]),
//     })
//    add(): void {
//     var current: treatModel = {
//       id: this.treat.id,
//       kind: this.userForm.controls['kind'].value,
//       day: this.userForm.controls['day'].value,
//       dayS:this.userForm.controls['dayS'].value,
//       hour: this.userForm.controls['hour'].value,
//       idDoctor: this.userForm.controls['idDoctor'].value,
//       tzPatient:this.userForm.controls['tzPatient'].value
//     }
//     this.treatService.Add(current);
//     this.router.navigate([`secretary/all-queues`])
//     this.bool=true;
//   }


// }

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { treatModel } from 'src/app/treat.model';
import { TreatsService } from 'src/app/treats.service';

@Component({
  selector: 'queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent {

  constructor(private route: Router, private treatService: TreatsService) { }
  kinds: string[] = ["שיננית", "קיבוע", "סתימה"];
  days: number[] = [1, 2, 3, 4, 5, 6];
  hours: string[] = ["03:00"];
  dayS: string[] = ["ראשון"];
  @Input()
  treat: treatModel = <treatModel>{};

  @Output()
  onAdd: EventEmitter<treatModel> = new EventEmitter<treatModel>();
  // @Input()
  // treat: treatModel = { id:1,kind: "", day:"1",hour:"13",idDoctor:"" }
  userForm: FormGroup = new FormGroup(
    {
      // "id": new FormControl("", [Validators.required]),
      "kind": new FormControl("", [Validators.required]),
      "day": new FormControl("", [Validators.required]),
      "dayS": new FormControl("", [Validators.required]),
      "hour": new FormControl("", [Validators.required]),
      "tzPatient": new FormControl("", [Validators.required]),
    })

  // add(): void {
  //   var current: treatModel = {
  //     id: this.treat.id,
  //     kind: this.userForm.controls['kind'].value,
  //     day: this.userForm.controls['day'].value,
  //     hour: this.userForm.controls['hour'].value,
  //     idDoctor:this.treat.idDoctor
  //   }
  //   this.treatService.Add(current);
  // }
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
    // this.route.navigate(['doctor/all-treatment'])
    // this.route.navigate(['doctor/all-treatment']);
    // this.route.navigate(['/doctor/patient-list/all-treatment']);

  }

}
