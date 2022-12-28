import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
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
