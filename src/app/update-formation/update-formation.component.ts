import { Component, OnInit } from '@angular/core';
import { Formation } from '../model/formation';

import { ActivatedRoute, Router } from '@angular/router';

import { ReclamationService } from '../services/reclamation.service';
import { FormationService } from '../services/formation.service';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update-formation',
  templateUrl: './update-formation.component.html',
  styleUrls: ['./update-formation.component.css']
})
export class UpdateFormationComponent implements OnInit {

  id: number=0;
  
  formation: Formation= new Formation();
  user:User=new User();
  constructor(private route: ActivatedRoute,private router: Router,
    private formationService: FormationService) { }
    
  ngOnInit() {
    this.formation = new Formation();
    this.id = this.route.snapshot.params['id'];  
    this.formationService.getFormation(this.id).subscribe(data => {
        console.log(data)
        this.formation = data;
      
      }, error => console.log(error));
      
    
  }

  updateFormation() {
    //this.formation.user=this.user;
  
    this.formationService.updateFormation(this.id, this.formation) .subscribe(data => {
        console.log(data);
        //this.formation = new Formation();
        
        this.gotoList();
      }, error => console.log(error));
  }
  

  onSubmit() {
    this.updateFormation();    
  }

  gotoList() {
    this.router.navigate(['/formation-list']);
  }
}
