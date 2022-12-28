import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Claim } from '../model/claim';
import { User } from '../model/user';
import { ClaimService } from '../services/claim.service';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-add-claims',
  templateUrl: './add-claims.component.html',
  styleUrls: ['./add-claims.component.css']
})
export class AddClaimsComponent implements OnInit{
  claim:Claim = new Claim();
  user:User =new User();
  id:number=4;
  constructor(private claimService: ClaimService,private router: Router,private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser(this.id).subscribe(data => {
      console.log(data)
      this.user = data;
    }, error => console.log(error));
  }
  save() {
    this.claim.dated=new Date();
    this.claim.etat=2;
    this.claim.user=this.user;
    this.claimService.createClaim(this.claim).subscribe(data => {
      console.log(data)
      //this.reclamation = new Reclamation();
      this.gotoList();
    },   
    error => console.log(error));
  }
  gotoList() {
    this.router.navigate(['/claim-list/2']);
   // this.router.navigate(['/employees']);
  }
}
