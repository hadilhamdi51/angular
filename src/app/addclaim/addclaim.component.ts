import { Component, OnInit } from '@angular/core';
import { Claim } from '../model/claim.model';
import { ClaimService } from '../services/claim.service';

@Component({
  selector: 'app-addclaim',
  templateUrl: './addclaim.component.html',
  styleUrls: ['./addclaim.component.css']
})
export class AddclaimComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  newClaim = new Claim();
  constructor(private claimService: ClaimService) { }

  addClaim(){
    this.claimService.ajouterClaim(this.newClaim);

    }
  

}
