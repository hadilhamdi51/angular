import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Claim } from "../model/claim";
import { ClaimService } from "../services/claim.service";
import { User } from "../model/user";
import { UserService } from "../services/user.service";
import { ClubService } from "../services/club.service";
import { Club } from "../model/club";

@Component({
  selector: 'app-claim-list',
  templateUrl: './claim-list.component.html',
  styleUrls: ['./claim-list.component.css']
})
export class ClaimListComponent  implements OnInit {
  claims: Observable<Claim[]> | undefined;
  claim:Claim = new Claim();
  club:Club = new Club();
  user:User =new User();
  id:number=1;
  etat:number=2;
  constructor(private route: ActivatedRoute,private claimService: ClaimService,private router: Router,private userService: UserService,private clubService: ClubService) {}

  ngOnInit() {
    this.etat = this.route.snapshot.params['etat'];
    this.reloadData();
  }

  reloadData() {
    this.claims = this.claimService.getClaimsList(this.etat);


  }
 async approuver(id:any){
    this.claim = new Claim();
    
    this.claim=await this.claimService.getClaim(id).toPromise();
     


   
    this.club.nom=this.claim.nomc;
    this.club.image=this.claim.image;
    this.club.description=this.claim.description;
    this.club.resp=this.claim.user;
    await this.clubService.createClub(this.club).toPromise();
   
    this.claim.etat=1;
   
    await  this.claimService.updateClaim(id, this.claim).toPromise();
        this. reloadData();
    
  }
  async desapprouver(id:any){
    this.claim = new Claim();
    
    this.claim=await this.claimService.getClaim(id).toPromise();
     
   
    this.claim.etat=0;
   
    await  this.claimService.updateClaim(id, this.claim).toPromise();
        this. reloadData();
    
  }

  
}
