import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users : User[]; 
  constructor() {
  this.users = [
  { idUser : 1, nom : "Hadil", email : "hadil@gmail.com",avatar:"assets/img/tun.png"},
  ];
  } 
  listeUsers():User[] { 
  return this.users;
  }
  ajouterUser( usr: User){ 
  this.users.push(usr);
  }
  }