import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProccessorComponent } from '../processorimg/components/proccessor/proccessor.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'procesor', component: ProccessorComponent }
];

@NgModule({
  declarations: [ProccessorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProcessorimgModule { }
