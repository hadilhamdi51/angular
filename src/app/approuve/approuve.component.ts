import { Component, OnInit } from '@angular/core';
import { Club } from '../model/club.model';
import { ClubService } from '../services/club.service';
@Component({
  selector: 'app-approuve',
  templateUrl: './approuve.component.html',
  styleUrls: ['./approuve.component.css']
})
export class ApprouveComponent implements OnInit{

  clubs : Club[]; //un tableau de chînes de caractères

  constructor(private clubService: ClubService ) {
   this.clubs = clubService.listeClubs();
   
   }
   

 ngOnInit(): void {
   throw new Error('Method not implemented.');
 }



}

