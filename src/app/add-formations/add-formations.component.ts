import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Club } from '../model/club';
import { Formation } from '../model/formation';

import { User } from '../model/user';
import { ClubService } from '../services/club.service';
import { FormationService } from '../services/formation.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-formations',
  templateUrl: './add-formations.component.html',
  styleUrls: ['./add-formations.component.css']
})
export class AddFormationsComponent implements OnInit{
  formation: Formation = new Formation();
  user:User =new User();
  id:number=4;
  club:Club= new Club();
  constructor(private formationService: FormationService,private router: Router,private userService: UserService,private clubService: ClubService) { }

  ngOnInit() {
    this.userService.getUser(this.id).subscribe(data => {
      console.log(data)
      this.user = data;
    }, error => console.log(error));


    this.clubService.getClubresp(this.id).subscribe(data => {
      console.log(data)
      this.club = data;
    }, error => console.log(error));
  }
  save() {
    this.formation.club=this.club;
    this.formation.user=this.user;
    this.formationService.createFormation(this.formation).subscribe(data => {
      console.log(data)
      //this.reclamation = new Reclamation();
      this.gotoList();
    }, 
    error => console.log(error));
  }
  gotoList() {
    this.router.navigate(['/formation-list']);
  }
}
