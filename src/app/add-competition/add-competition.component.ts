import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Competition } from '../model/competition';
import { User } from '../model/user';
import { CompetitionService } from '../services/competition.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-competition',
  templateUrl: './add-competition.component.html',
  styleUrls: ['./add-competition.component.css']
})
export class AddCompetitionComponent implements OnInit{
  competition: Competition = new Competition();
  user:User =new User();
  id:number=1;
  constructor(private competitionService: CompetitionService,private router: Router,private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser(this.id).subscribe(data => {
      console.log(data)
      this.user = data;
    }, error => console.log(error));
  }
  save() {
    this.competition.user=this.user;
    this.competitionService.createCompetition(this.competition).subscribe(data => {
      console.log(data)
      //this.reclamation = new Reclamation();
      this.gotoList();
    }, 
    error => console.log(error));
  }
  gotoList() {
    this.router.navigate(['/competition-list']);
  }
}
