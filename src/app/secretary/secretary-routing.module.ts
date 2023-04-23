import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllQueuesComponent } from './all-queues/all-queues.component';
import { QueueComponent } from './queue/queue.component';



const routes: Routes = [
 {
   path:'',
   component:AllQueuesComponent,
  
 },
{
  path:'queue',
  component:QueueComponent,
},
{
  path:'all-queues',
 component:AllQueuesComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecretaryRoutingModule { }
