import { Component } from '@angular/core';
import { treatModel } from 'src/app/treat.model';
import { TreatsService } from 'src/app/treats.service';

@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent{
  treats: treatModel[] = []
  currentDayNum = 0
  
  constructor(private treatService: TreatsService) {
    this.treatService.getTreatsFromServer().subscribe(res => this.treats = res);
    this.currentDayNum = new Date().getDay()+1
  }
}
