import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { AddclubComponent } from './addclub/addclub.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
 
 
  {path: "", redirectTo: "login", pathMatch: "full" },
  {path: "register", component : RegisterComponent},
  {path: "actualite", component : ActualiteComponent},
  { path: "", redirectTo: "actualite", pathMatch: "full" },
  {path: "addclub", component : AddclubComponent},
  {path: "admin", component : AdminComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
