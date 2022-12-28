import { Component, OnInit } from '@angular/core';
import { Formation } from '../model/formation';
import { ActivatedRoute, Router } from '@angular/router';
import { ReclamationService } from '../services/reclamation.service';
import { User } from '../model/user';
import { Competition } from '../model/competition';
import { CompetitionService } from '../services/competition.service';
@Component({
  selector: 'app-update-competition',
  templateUrl: './update-competition.component.html',
  styleUrls: ['./update-competition.component.css']
})
export class UpdateCompetitionComponent  implements OnInit {
  id: number=0;
  competition: Competition= new Competition();
  user:any;
  constructor(private route: ActivatedRoute,private router: Router,
    private competitionService: CompetitionService) { }

  ngOnInit() {
    this.competition = new Competition();

    this.id = this.route.snapshot.params['id'];
    
    this.competitionService.getCompetition(this.id).subscribe(data => {
        console.log(data)
        this.competition = data;
        this.user=this.competition.user;
      }, error => console.log(error));
  }

  updateCompetition() {
    this.competition.user=this.user;
    this.competitionService.updateCompetition(this.id, this.competition) .subscribe(data => {
        console.log(data);
        this.competition= new Competition();
        this.gotoList();
      }, error => console.log(error));
  }
  

  onSubmit() {
    this.updateCompetition();    
  }

  gotoList() {
    this.router.navigate(['/competition-list']);
  }
}
