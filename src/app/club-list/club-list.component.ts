import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Club } from "../model/club";
import { ClubService } from "../services/club.service";
@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.css']
})
export class ClubListComponent implements OnInit {
  clubs: Observable<Club[]> | undefined;

  constructor(private clubService: ClubService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.clubs = this.clubService.getClaimsList();
  }


  
}