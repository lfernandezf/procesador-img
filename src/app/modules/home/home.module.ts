import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { EffectsModule } from '@ngrx/effects';
import { loginEffectsArr } from 'src/app/store/login/effects';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [HomeComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    EffectsModule.forRoot(loginEffectsArr)    
  ]
})
export class HomeModule { }
