import { Injectable } from '@angular/core';
import { treatModel } from './treat.model';
import { HttpClient } from '@angular/common/http'
import { waitForAsync } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})

export class TreatsService {
  constructor(private http: HttpClient) {
    this.getTreatsFromServer().subscribe(res => this.treats = res)
  }

  // constructor() {}
  treats: treatModel[] = [
    {
      id: 1,
      kind: "קיבוע",
      day: 1,
      dayS: "sunday",
      hour: "13:09",
      idDoctor: "23",
      tzPatient: "2556"
    },
    {
      id: 2,
      kind: "חור",
      day: 2,
      dayS: "sunday",
      hour: "13",
      idDoctor: "23",
      tzPatient: "2556"
    },
    {
      id: 3,
      kind: "חור",
      day: 3,
      dayS: "sunday",
      hour: "13",
      idDoctor: "23",
      tzPatient: "2556"
    },
    {
      id: 4,
      kind: "חור",
      day: 4,
      dayS: "sunday",
      hour: "13",
      idDoctor: "23",
      tzPatient: "2556"
    },
    {
      id: 5,
      kind: "חור",
      day: 5,
      dayS: "sunday",
      hour: "13",
      idDoctor: "23",
      tzPatient: "2556"
    },
    {
      id: 6,
      kind: "חור",
      day: 6,
      dayS: "sunday",
      hour: "13",
      idDoctor: "23",
      tzPatient: "2556"
    },
    {
      id: 7,
      kind: "חור",
      day: 7,
      dayS: "sunday",
      hour: "13",
      idDoctor: "23",
      tzPatient: "2556"
    }
  ];
  get(): treatModel[] {
    return this.treats;
  }
  // Add1(treat: treatModel) {
  //   if (this.treats.find(t => t.id === treat.id)) {

  //     let index = this.treats.findIndex(t => t.id === treat.id);
  //     this.treats.splice(index, 1);
  //     this.treats.push(treat);
  //   }else
  //   this.treats.push(treat);
  // }
  Add(treat: treatModel) {
    if (this.treats.find(t => t.id === treat.id)) {

      return this.http.put<any>(`https://localhost:44320/api/Treatment/${treat.id}`, treat).subscribe(result => console.log(result))

    } else {
      return this.http.post<any>(`https://localhost:44320/api/Treatment`, treat).subscribe(result => console.log(result))
    }

  }
  getTreatsFromServer() {
  
    return this.http.get<treatModel[]>("https://localhost:44320/api/Treatment")
  }
  Delete(treat: treatModel) {

    let index = this.treats.indexOf(treat);
    this.treats.splice(index + 1);
  }
  
}
