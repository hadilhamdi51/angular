import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


import { FooterComponent } from './footer/footer.component';

import { RegisterComponent } from './register/register.component';

import { ActualiteComponent } from './actualite/actualite.component';
import { AddclubComponent } from './addclub/addclub.component';
import { AdminComponent } from './admin/admin.component';
import { ClubsComponent } from './clubs/clubs.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   
   
   
    FooterComponent,
   
    RegisterComponent,
   
    ActualiteComponent,
        AddclubComponent,
        AdminComponent,
        ClubsComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
