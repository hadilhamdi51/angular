import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  users : User[]; //un tableau de chînes de caractères

  constructor(private userService: UserService ) {
   this.users = userService.listeUsers();
   
   }
   

 ngOnInit(): void {
   throw new Error('Method not implemented.');
 }
}