import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReclamationsComponent } from './reclamations/reclamations.component'; 

import { ActualiteComponent } from './actualite/actualite.component';
import { AddclubComponent } from './addclub/addclub.component';
import { AdminComponent } from './admin/admin.component';
import {AddReclamationsComponent } from './add-reclamations/add-reclamations.component'; 
import { AddFormationsComponent } from './add-formations/add-formations.component';
import { UpdateReclamationComponent } from './update-reclamation/update-reclamation.component';
import { UpdateFormationComponent } from './update-formation/update-formation.component';
import { AddClaimsComponent } from './add-claims/add-claims.component';
import { FormationListComponent } from './formation-list/formation-list.component';
import { AddCompetitionComponent } from './add-competition/add-competition.component';
import { CompetitionListComponent } from './competition-list/competition-list.component';
import { UpdateCompetitionComponent } from './update-competition/update-competition.component';
import { ReclamationListComponent } from './reclamation-list/reclamation-list.component';
import { ClaimListComponent } from './claim-list/claim-list.component';
import { UpdateClaimComponent } from './update-claim/update-claim.component';
import { MesdemandeComponent } from './mesdemande/mesdemande.component';
import { FormulaireInscriptionComponent } from './formulaire-inscription/formulaire-inscription.component';
import { ClubListComponent } from './club-list/club-list.component';
import { AuthModule } from './auth/auth.module';
import { LogComponent } from './log/log.component';




const routes: Routes = [
  
  {path: "reclamations", component : ReclamationsComponent},
  {path: "add-reclamations", component : AddReclamationsComponent},
  {path: "add-competitions", component : AddCompetitionComponent},
  {path: "add-formations", component : AddFormationsComponent},
  {path: "add-claims", component : AddClaimsComponent},
  {path: "update-reclamation/:id", component : UpdateReclamationComponent},
  {path: "update-competition/:id", component : UpdateCompetitionComponent},
  {path: "update-claim/:id", component : UpdateClaimComponent},
  {path: "update-formation/:id", component : UpdateFormationComponent},
 { path: "formation-list", component : FormationListComponent},
 { path: "competition-list", component :CompetitionListComponent},
 { path: "reclamation-list", component :ReclamationListComponent},
 { path: "claim-list/:etat", component :ClaimListComponent},
 { path: "club-list", component :ClubListComponent},
 { path: "mesdemande/:idu", component :MesdemandeComponent},
 {path: "formulaire-inscription", component : FormulaireInscriptionComponent},


{path: "actualite", component : ActualiteComponent},
{ path: "", redirectTo: "actualite", pathMatch: "full" },
{path: "addclub", component : AddclubComponent},
{path: "admin", component : AdminComponent},
{path: "log", component : LogComponent},

{path: "auth",loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},







];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
