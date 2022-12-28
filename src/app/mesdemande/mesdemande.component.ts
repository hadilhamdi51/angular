import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Claim } from '../model/claim';
import { Club } from '../model/club';
import { User } from '../model/user';
import { ClaimService } from '../services/claim.service';
import { ClubService } from '../services/club.service';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-mesdemande',
  templateUrl: './mesdemande.component.html',
  styleUrls: ['./mesdemande.component.css']
})
export class MesdemandeComponent  implements OnInit {
  claims: Observable<Claim[]> | undefined;
  claim:Claim = new Claim();
  club:Club = new Club();
  user:User =new User();
  idu:number=4;
 
  constructor(private route: ActivatedRoute,private claimService: ClaimService,private router: Router,private userService: UserService,private clubService: ClubService) {}

   ngOnInit() {
 //   this.user= await this.userService.getUser(this.idu).toPromise();
 this.claims = this.claimService.getClaimsUserList(this.idu);
   // console.log(this.user);
  
  }
etat(e:any){
  if (e==1)
  return "Acceptée";
  else if (e==2)
  return "En cours";
  else
  return "Réfusée"
}
  

  
}


