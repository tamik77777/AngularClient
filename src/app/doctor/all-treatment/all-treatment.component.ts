import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { treatModel } from 'src/app/treat.model';
import { TreatsService } from 'src/app/treats.service';

@Component({
  selector: 'all-treatment',
  templateUrl: './all-treatment.component.html',
  styleUrls: ['./all-treatment.component.css']
})
export class AllTreatmentComponent implements OnInit {
  treats:treatModel[]=[];
  is:boolean |undefined;
  CurrentIdDoctor:String|undefined|null;
  selectedTreat: treatModel | undefined;
  id: number = 1;
  constructor(private treatService :TreatsService, private route: ActivatedRoute, private router: Router ) 
  { 
    this.treatService.getTreatsFromServer().subscribe(res => this.treats = res);
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.CurrentIdDoctor = this.route.snapshot.paramMap.get('id')
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
   this.is=true;
  }
  flag:boolean=true
  
  hideForm() { 
   
    this.selectedTreat = undefined;
    this.is = undefined;
    this.flag=false
  }
}
