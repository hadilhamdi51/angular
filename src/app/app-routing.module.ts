import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubsComponent } from './clubs/clubs.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { AddclubComponent } from './addclub/addclub.component';
import { AdminComponent } from './admin/admin.component';
import { ApprouveComponent } from './approuve/approuve.component';
import { AddclaimComponent } from './addclaim/addclaim.component';
import { ClaimsComponent } from './claims/claims.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
 
 
  {path: "", redirectTo: "login", pathMatch: "full" },
  {path: "register", component : RegisterComponent},
  {path: "actualite", component : ActualiteComponent},
  { path: "", redirectTo: "actualite", pathMatch: "full" },
  {path: "addclub", component : AddclubComponent},
  {path: "admin", component : AdminComponent},
  {path: "clubs", component : ClubsComponent},
  {path: "approuve", component : ApprouveComponent},
  {path: "addclaim", component : AddclaimComponent},
  {path: "claims", component : ClaimsComponent},
  {path: "users", component : UsersComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
