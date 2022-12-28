import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { FooterComponent } from './footer/footer.component';


import { ActualiteComponent } from './actualite/actualite.component';
import { AddclubComponent } from './addclub/addclub.component';
import { AdminComponent } from './admin/admin.component';


import { ReclamationsComponent } from './reclamations/reclamations.component';
import { AddReclamationsComponent } from './add-reclamations/add-reclamations.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddFormationsComponent } from './add-formations/add-formations.component';
import { UpdateReclamationComponent } from './update-reclamation/update-reclamation.component';
import { AddCompetitionComponent } from './add-competition/add-competition.component';
import { UpdateFormationComponent } from './update-formation/update-formation.component';
import { AddClaimsComponent } from './add-claims/add-claims.component';
import { FormationListComponent } from './formation-list/formation-list.component';
import { CompetitionListComponent } from './competition-list/competition-list.component';
import { UpdateCompetitionComponent } from './update-competition/update-competition.component';
import { ReclamationListComponent } from './reclamation-list/reclamation-list.component';
import { ClaimListComponent } from './claim-list/claim-list.component';
import { UpdateClaimComponent } from './update-claim/update-claim.component';
import { MesdemandeComponent } from './mesdemande/mesdemande.component';
import { FormulaireInscriptionComponent } from './formulaire-inscription/formulaire-inscription.component';
import { ClubListComponent } from './club-list/club-list.component';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
   
   
   
   
    FooterComponent,
   
  
   
    ActualiteComponent,
        AddclubComponent,
        AdminComponent,
        AddFormationsComponent,
        AddReclamationsComponent,
        ReclamationsComponent,
        AddFormationsComponent,
        UpdateReclamationComponent,
        AddCompetitionComponent,
        UpdateFormationComponent,
        AddClaimsComponent,
        FormationListComponent,
        CompetitionListComponent,
        UpdateCompetitionComponent,
        ReclamationListComponent,
        ClaimListComponent,
        UpdateClaimComponent,
        MesdemandeComponent,
        FormulaireInscriptionComponent,
        ClubListComponent,
        UserComponent
       
       
   
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
