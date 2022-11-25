import { Component, OnInit } from '@angular/core';
import { Club } from '../model/club.model';
import { ClubService } from '../services/club.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit{

   clubs : Club[]; //un tableau de chînes de caractères

   constructor(private clubService: ClubService ) {
    this.clubs = clubService.listeClubs();
    
    }
    

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



}
