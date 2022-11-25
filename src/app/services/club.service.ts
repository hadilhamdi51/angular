import { Injectable } from '@angular/core';
; import { Club } from '../model/club.model';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  clubs : Club[]; 
  constructor() {
  this.clubs = [
  { id : 1, nom : "Tunivision", description : "association",logo:"assets/img/.png"},
  ];
  } 
  listeClubs():Club[] { 
  return this.clubs;
  }
  ajouterClub( clb: Club){ 
  this.clubs.push(clb);
  }
  }
  
