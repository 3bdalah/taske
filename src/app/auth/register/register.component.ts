import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  standalone:true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  imports:[
    ReactiveFormsModule
  ]
})
export class RegisterComponent {
isLoading:boolean= false;
errorMessage: string = '';

constructor(
  private router: Router,
  private authServ:AuthService
) {}


registerForm: FormGroup = new FormGroup(
  {
    name: new FormControl(null,[Validators.required,Validators.minLength(1)]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern( '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$'),
    ]),
   
  },
);
ngOnInit(): void {}
onSubmit(registerForm: FormGroup) {
  this.isLoading = true;
  if (registerForm.valid) {
 
    const {name,email,password} = registerForm.value;
    
        this.authServ.register({name,email,password}).subscribe( (res)=>{
          if (res.user.accessToken) {
            this.router.navigate(['auth/login']);
          }
        },(error)=>{
            this.isLoading =false;
            console
          alert('failed register password or email or name have error or email already Exist ');
        })
      }
      
    };
}
