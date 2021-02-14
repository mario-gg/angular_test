import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from 'src/Models/user-login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl: string = 'https://prueba.cl/api';

  constructor(private _httpClient: HttpClient) {   }

  public get(){
    return this._httpClient.get<any[]>(this.baseUrl)
  }

  public getById(id: number){
    return this._httpClient.get<UserLogin>(`${this.baseUrl}/api/1`);
  }
  

}
