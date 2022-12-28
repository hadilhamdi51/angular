
import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { ReclamationService } from "../services/reclamation.service";
import { Reclamation } from "../model/reclamtion";
import { Router } from "@angular/router";

@Component({
  selector: 'app-reclamation-list',
  templateUrl: './reclamation-list.component.html',
  styleUrls: ['./reclamation-list.component.css']
})
export class ReclamationListComponent implements OnInit {
  reclamations: Observable<Reclamation[]> | undefined;

  constructor(private reclamationService: ReclamationService,private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.reclamations = this.reclamationService.getReclamationsList();
  }

  
}
