import { getTestBed, TestBed } from '@angular/core/testing';
import { isRegExp } from 'util';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginService } from './login.service';
import { inject } from '@angular/core';
import { UserLogin } from 'src/Models/user-login';

describe('LoginService', () => {
  let injector: TestBed; 
  let service: LoginService;
  let httpMock : HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ LoginService ],
    });
    injector = getTestBed();
    service = injector.get(LoginService);
    httpMock  = injector.get(HttpTestingController);
  });
  

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });

  it('Should get data from API', ()=>{
    service.get().subscribe((result) => {
      expect(result).toBeDefined();
    });

    const request = httpMock.expectOne('https://prueba.cl/api'); 
    expect(request.request.method).toBe('GET');
  });

  it('Should get login based on Id', () => {
    const id = 1; 
    let login: UserLogin;
    service.getById(id).subscribe((result) => {
      expect(typeof(login)).toEqual('UserLogin');
    })
  });
  

});
