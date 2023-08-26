import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  getUsers():Observable<User[]>{
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUser():Observable<User>{
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users/2');
  }

}
