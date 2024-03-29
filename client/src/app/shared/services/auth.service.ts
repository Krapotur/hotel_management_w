import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthToken, Login} from "../interfaces";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = null
  private status = null

  constructor(private http: HttpClient) {
  }


  login(login: Login): Observable<AuthToken> {
    return this.http.post<AuthToken>('api/auth/login', login)
      .pipe(
        tap((authToken) => {
          this.setToken(authToken.token)
          localStorage.setItem('auth-token', authToken.token)
          localStorage['user'] = JSON.stringify(authToken)
          localStorage.setItem('post', authToken.post)
        })
      )
  }

  setToken(token: string) {
    this.token = token
  }

  getToken(): string{
    return this.token
  }

  isAuthenticated(): boolean{
    return !!this.token
  }

  logout(){
    this.setToken(null)
    localStorage.clear()
  }

  setStatus(status: number){
    this.status = status
  }

  getStatus(){
    return this.status
  }
}
