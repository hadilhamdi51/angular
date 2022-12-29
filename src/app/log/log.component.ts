import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  public loginForm:FormGroup;

constructor(
  public formBuilder:FormBuilder,
  public authService:AuthService,

  public router:Router,
){
  this.loginForm=this.formBuilder.group({
    username:[''],
    password:[''],
    
  });
}




  ngOnInit(): void {
    
  }
  login(){
    this.authService.login(this.loginForm.value).subscribe(res=>{
      (data:any)=>console.log(data.access_token);
      if(res.status=201){
        
        this.loginForm.reset();
        this.router.navigate(['/admin']);
      }
    });
  }
      

    
}
