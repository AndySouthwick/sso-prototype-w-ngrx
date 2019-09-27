import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Reducer} from './reducer';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { AlertComponent } from './components/alert/alert.component';
import { InterruptComponent } from './interrupt/interrupt.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    HomeComponent,
    LoginComponent,
    FormInputComponent,
    AlertComponent,
    InterruptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ state: Reducer }),
    StoreDevtoolsModule.instrument({
    logOnly: environment.production, // Restrict extension to log-only mode
    }),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
