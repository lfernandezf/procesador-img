import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProccessorComponent } from '../processorimg/components/proccessor/proccessor.component';
import { RouterModule, Routes } from '@angular/router';
import { ImageUploadModule } from 'angular2-image-upload';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: 'procesor', component: ProccessorComponent }
];

@NgModule({
  declarations: [ProccessorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ImageUploadModule.forRoot(),
    SharedModule
    
  ]
})
export class ProcessorimgModule { }
