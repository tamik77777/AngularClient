import { Injectable } from '@angular/core';
import { patientModel } from './patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor() { }
  patients:patientModel[]=[
    {
      id:"111",
      name:"chemda",
      pel:'05834567',
      address:"aportzim",
      kind:"שיננית",
      num:"1111"
    },
    {
      id:"222",
      name:"sari",
      pel:'03465433',
      address:"tiumkin",
      kind:"הדבקת קיבוע",
      num:"111"
    
    },
    {
      id:"333",
      name:"chaya",
      pel:'03465433',
      address:"tiumkin",
      kind:"הדבקת קיבוע",
      num:"222"
    
    }
  ]

  get(){
    return this.patients;
  }
  Add(patient:patientModel){
    console.log('userName',patient.name)
    this.patients.push(patient);
  }
  Delete(patient:patientModel){
    
    let index=this.patients.indexOf(patient);
    this.patients.splice(index,1);
  }
 }

