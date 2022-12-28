import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reclamation } from '../model/reclamtion';
import { User } from '../model/user';
import { ReclamationService } from '../services/reclamation.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-reclamations',
  templateUrl: './add-reclamations.component.html',
  styleUrls: ['./add-reclamations.component.css']
})
export class AddReclamationsComponent implements OnInit{
  reclamation: Reclamation = new Reclamation();
  user:User =new User();
  id:number=1;
  constructor(private reclamationService: ReclamationService,private router: Router,private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser(this.id).subscribe(data => {
      console.log(data)
      this.user = data;
    }, error => console.log(error));
  }
  save() {
    this.reclamation.dater=new Date();
this.reclamation.user=this.user;
console.log(this.reclamation.user);

    this.reclamationService.createReclamation(this.reclamation).subscribe(data => {
      console.log(data)
      //this.reclamation = new Reclamation();
      this.gotoList();
    }, 
    error => console.log(error));
  }
  gotoList() {
    this.router.navigate(['/reclamation-list']);
  }
}
