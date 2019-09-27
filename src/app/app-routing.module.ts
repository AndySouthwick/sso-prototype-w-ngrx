import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {InterruptComponent} from './interrupt/interrupt.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'interrupt', component: InterruptComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
