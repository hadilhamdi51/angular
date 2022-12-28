import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Formation } from '../model/formation';
import { FormationService } from '../services/formation.service';
@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {
  formations: Observable<Formation[]> | undefined;

  constructor(private formationService: FormationService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.formations = this.formationService.getFormationsList();
  }
   supprimer(id:any){
    this.formationService.delFormation(id) 
      .subscribe(  
        data => {  
          console.log(data);  
          this. reloadData();
            }, 
        error => console.log(error));  
        
  }

  
}