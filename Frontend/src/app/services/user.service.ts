import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
  	private http: HttpClient
  	) { }

  url: string = '';
  user;

  postMember(member) {
    return this.http.post(this.url+'/member', member, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type','application/json')
    });
  }

  postLogin(member) {
    return this.http.post(this.url+'/login', member, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type','application/json')
    });  
  }

  auth(data) {
    localStorage.setItem('user', JSON.stringify(data));
    this.user = data;
  }
}
