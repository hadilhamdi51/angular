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

import { FormsModule } from '@angular/forms';
import { ApprouveComponent } from './approuve/approuve.component';
import { ClaimsComponent } from './claims/claims.component';
import { AddclaimComponent } from './addclaim/addclaim.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

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
        ApprouveComponent,
        ClaimsComponent,
        AddclaimComponent,
        UserComponent,
        UsersComponent,
       
        
       
   
   
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    FormsModule
    ]

    ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
