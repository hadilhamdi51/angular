
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reclamation } from '../model/reclamtion';
import { ReclamationService } from '../services/reclamation.service';
@Component({
  selector: 'app-update-reclamation',
  templateUrl: './update-reclamation.component.html',
  styleUrls: ['./update-reclamation.component.css']
})
export class UpdateReclamationComponent implements OnInit {

  id: number=0;
  reclamation: Reclamation= new Reclamation();

  constructor(private route: ActivatedRoute,private router: Router,
    private reclamationService: ReclamationService) { }

  ngOnInit() {
    this.reclamation = new Reclamation();

    this.id = this.route.snapshot.params['id'];
    
    this.reclamationService.getReclamation(this.id).subscribe(data => {
        console.log(data)
        this.reclamation = data;
      }, error => console.log(error));
  }

  updateReclamation() {
    this.reclamationService.updateReclamation(this.id, this.reclamation) .subscribe(data => {
        console.log(data);
        this.reclamation = new Reclamation();
        this.gotoList();
      }, error => console.log(error));
  }
  

  onSubmit() {
    this.updateReclamation();    
  }

  gotoList() {
    this.router.navigate(['/reclamation-list']);
    //this.router.navigate(['/reclamations']);
  }
}

