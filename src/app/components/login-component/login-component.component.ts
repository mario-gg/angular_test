import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) { 
  
  }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.formulario = this._formBuilder.group({
      email: new FormControl('',[Validators.required, Validators.email ]),
      password: new FormControl('',Validators.required)

    });
  }

  onSubmit(){
    console.log("here");
    return 1+1;
  }



}
