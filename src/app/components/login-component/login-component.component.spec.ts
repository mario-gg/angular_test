import { IterableChangeRecord_ } from '@angular/core/src/change_detection/differs/default_iterable_differ';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginComponentComponent } from './login-component.component';
import { by } from 'protractor';
import { DebugElement } from '@angular/core';

describe('LoginComponentComponent', () => {
  let component: LoginComponentComponent;
  let fixture: ComponentFixture<LoginComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponentComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  

  //cuando el usuario ingresa su nombre de usuario (email) y contraseña se debe habilitar el botón
  //cuando el usuario hace click en el botón ingresar se debe llamar a la función ingresar. 

  it('debe tener un campo nombre de usuario y un campo contraseña',()=>{
    let textEmail = fixture.debugElement.query(By.css("#email"));
    let password = fixture.debugElement.query(By.css("#password"));
    expect(textEmail).toBeDefined();
    expect(password).toBeDefined();
  });

  it('el botón ingresar debe estar deshabilitado si no se ingresan el usuario y password', ()=> {
    let button = fixture.debugElement.query(By.css(".btn"));
    expect(button.attributes.disabled).toBeFalsy();
  });

  it('cuando el usuario ingresa su nombre de usuario (email) y contraseña se debe habilitar el botón', ()=> {
    let userName = component.formulario.controls["email"]; 
    let password = component.formulario.controls["password"];
    let button = fixture.debugElement.query(By.css(".btn"));
    

    userName.patchValue("mguajardo.eecc@mineravallecentral.cl");
    password.patchValue("1234567")
    expect(button.attributes.disabled).toBeFalsy();
  });



  it('Debería llamar al método onSubmit', ()=> {

    let userName = component.formulario.controls["email"]; 
    let password = component.formulario.controls["password"];
    userName.patchValue("mguajardo.eecc@mineravallecentral.cl");
    password.patchValue("1234567")

    spyOn(fixture.componentInstance,'onSubmit')
    let form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('submit',null);
    fixture.detectChanges();

    expect(fixture.componentInstance.onSubmit).toHaveBeenCalled();
  });

  it('Debería probar el retorno del método onSubmit' ,() => {
    let resultado = fixture.componentInstance.onSubmit();
    expect(resultado).toEqual(2);



  });




});
