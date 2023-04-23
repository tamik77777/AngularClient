// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { treatModel } from 'src/app/treat.model';
// import { TreatsService } from 'src/app/treats.service';



// @Component({
//   selector: 'all-queues',
//   templateUrl: './all-queues.component.html',
//   styleUrls: ['./all-queues.component.css']
// })
// export class AllQueuesComponent implements OnInit {

//   treats: treatModel[] = []
//   currentId: number=0
//   constructor(private treatsService: TreatsService, private route: ActivatedRoute, private router: Router) {
//     this.treats = treatsService.get()
//     this.currentId = Number(this.route.snapshot.paramMap.get('id'))
//   }

//   ngOnInit(): void {
//   }

//   addQueue() {
//     this.router.navigate([`secretary/queue`])
//   }

// }



import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { treatModel } from 'src/app/treat.model';
import { TreatsService } from 'src/app/treats.service';

@Component({
  selector: 'all-queues',
  templateUrl: './all-queues.component.html',
  styleUrls: ['./all-queues.component.css']
})
export class AllQueuesComponent implements OnInit {
  treats:treatModel[]=[];
  is:boolean |undefined;
  CurrentIdDoctor:String|undefined;
  selectedTreat: treatModel | undefined;
  id: number = 1;
  constructor(private treatService :TreatsService, private route: ActivatedRoute, private router: Router ) 
  { 
    this.treatService.getTreatsFromServer().subscribe(res => this.treats = res);
    this.id = Number(this.route.snapshot.paramMap.get('id'))

     this.is=false;
  }

  ngOnInit(  ): void {
    this.is=false;
    for (let index = 0; index < this.treatService.treats.length; index++) {
      const element = this.treatService.treats[index];
      if(element.idDoctor==this.CurrentIdDoctor)
       this.treats.push(element);
     }

  }
  update(treat:treatModel):void{
    this.selectedTreat = treat;
  }
  addTreat() {
          // this.route.navigate(['/doctor/patient-list/form-care']);
   this.is=true;
    // this.router.navigate([`doctor/form-care`])
  }
  flag:boolean=true
  
  hideForm() { 
   
    this.selectedTreat = undefined;
    this.is = undefined;
    this.flag=false
  }
}

