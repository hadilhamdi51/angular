import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Claim } from '../model/claim';
import { ClaimService } from '../services/claim.service';


@Component({
  selector: 'app-update-claim',
  templateUrl: './update-claim.component.html',
  styleUrls: ['./update-claim.component.css']
})
export class UpdateClaimComponent  implements OnInit {

 
  id: number=0;
  claim: Claim= new Claim();

  constructor(private route: ActivatedRoute,private router: Router, private claimService: ClaimService) { }

  ngOnInit() {
    this.claim = new Claim();

    this.id = this.route.snapshot.params['id'];
    
    this.claimService.getClaim(this.id).subscribe(data => {
        console.log(data)
        this.claim = data;
      }, error => console.log(error));
  }

  updateClaim() {
    this.claimService.updateClaim(this.id, this.claim) .subscribe(data => {console.log(data);
        this.claim = new Claim();
        this.gotoList();
      }, error => console.log(error));
  }
  

  onSubmit() {
    this.updateClaim();    
  }

  gotoList() {
     this.router.navigate(['/claim-list']);
    //this.router.navigate(['/reclamations']);
  }
}
