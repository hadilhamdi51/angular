import { Component, OnInit } from '@angular/core';
import { Club } from '../model/club.model';
import { ClubService } from '../services/club.service';

@Component({
  selector: 'app-addclub',
  templateUrl: './addclub.component.html',
  styleUrls: ['./addclub.component.css']
})
export class AddclubComponent  implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  newClub = new Club();
  constructor(private clubService: ClubService) { }

  addClub(){
    this.clubService.ajouterClub(this.newClub);

    }
  

}
