
import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Competition } from "../model/competition";
import { CompetitionService } from "../services/competition.service";
@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.css']
})
export class CompetitionListComponent implements OnInit {
  competitions: Observable<Competition[]> | undefined;

  constructor(private competitionService: CompetitionService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.competitions = this.competitionService.getCompetitionsList();
  }
  supprimer(id:any){
    this.competitionService.delCompetition(id) 
      .subscribe(  
        data => {  
          console.log(data);  
          this. reloadData();
            }, 
        error => console.log(error));  
        
  }
  
}
