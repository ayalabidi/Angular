import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrl: './auth-user.component.css'
})
export class AuthUserComponent {
email = new FormControl('', [Validators.required]);
password = new FormControl('',  [Validators.required]);
onLogin(){
  console.log("email : "+this.email);
}

UserForm = new FormGroup({
name : new FormControl('', [Validators.required, Validators.minLength(5)]),
email : new FormControl('', [Validators.required , Validators.email]),
password : new FormControl('',  [Validators.required , Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')]),
phone : new FormControl('',  [Validators.required , Validators.pattern('^\\+?[1-9]\\d{1,14}$')]),
address : new FormControl('',  [Validators.required]),
})


}
