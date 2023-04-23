import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.css']
})
export class TreatmentComponent implements OnInit {

  constructor(private route:Router,private actRoute : ActivatedRoute) { }
  userId:string|null|undefined;

  ngOnInit(): void {

 this.actRoute.paramMap.subscribe(paramMap =>{
    if(paramMap.has("id")){
      this.userId = paramMap.get("id");
    }
  });
  
  }
  schedule():void{
    this.route.navigate(['/doctor/'+1+'/schedule']);
  }

  showPatient():void{
    this.route.navigate(['/doctor/'+1+'/patient-list']);
  }
}
