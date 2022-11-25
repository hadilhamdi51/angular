import { Injectable } from '@angular/core';
import { Claim } from '../model/claim.model';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {
  claims : Claim[]; 
  constructor() {
  this.claims = [
  { id : 1},
  ];
  } 
  listeClaims():Claim[] { 
  return this.claims;
  }
  ajouterClaim( clm: Claim){ 
  this.claims.push(clm);
  }
  }
  
