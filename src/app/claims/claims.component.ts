import { Component, OnInit } from '@angular/core';
import { Claim } from '../model/claim.model';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.css']
})
  
    export class ClaimsComponent implements OnInit {
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
    claims:Claim[];
    constructor(){
      this.claims=[
        {id:1,description:"je veux hdjjdkekkelkd"}
      ];
    }
}
