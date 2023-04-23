import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueueComponent } from './queue/queue.component';
import { SecretaryRoutingModule } from './secretary-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AllQueuesComponent } from './all-queues/all-queues.component';



@NgModule({
  declarations: [
    QueueComponent,
    AllQueuesComponent
  ],
  imports: [
    CommonModule,
    SecretaryRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    QueueComponent
  ]
})
export class SecretaryModule { }
