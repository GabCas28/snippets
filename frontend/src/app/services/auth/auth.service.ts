import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/user';
function getCookie(name: string) {
  let ca: Array<string> = document.cookie.split(';');
  let caLen: number = ca.length;
  let cookieName = `${name}=`;
  let c: string;

  for (let i: number = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, '');
      if (c.indexOf(cookieName) == 0) {
          return c.substring(cookieName.length, c.length);
      }
  }
  return '';
}
const httpOptions= {
  // withCredentials: true,
  // mode: 'cors'
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  public welcome():void {
    this.http.get('http://127.0.0.1:8000/').subscribe((res)=>console.log)
  }

  public logIn(user: User): Observable<Object> {
    var csrftoken = getCookie('XSRF-TOKEN');
    const alien = btoa(`${user.username}:${user.password}`);
    const headers = new HttpHeaders({Authentication: `Basic ${alien}`})
    return this.http.post('http://127.0.0.1:8000/auth/login/', user, {  
    ...httpOptions,
    headers: new HttpHeaders({
      'x-csrftoken': csrftoken
    })})
  }

  public logOut(): string {
    return 'success';
  }

  // public userDetails(): User {
  //   return { name: 'gabriel' };
  // }
}
