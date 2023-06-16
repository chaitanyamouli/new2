import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Registration } from '../models/registration';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
 
  reg:Registration= new Registration();

  registrationsform!:FormGroup;
  constructor(private formbuild:FormBuilder){}

  ngOnInit(){
    this.registrationsform=this.formbuild.group({
      yourname: new FormControl('',Validators.compose([
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(6),
        Validators.pattern('([a-zA-Z0-9]| |/|\\|@|#|\$|%|&)+'),
      ])),
      youremail: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('([a-zA-Z0-9]| |/|\\|@|#|\$|%|&)+'),
        ])
      ),
      password:new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(45),
          Validators.pattern('([a-zA-Z0-9]| |/|\\|@|#|\$|%|&)+'),
        ])
      )
    })
  }

  Registration()
  {
    console.log(this.reg);
  }

  
  

}

