import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { JwtResponse } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  AUTH_SERVER: string = 'http://localhost:8080';
  authSubject = new BehaviorSubject(false);
  private token?: string | null;

  constructor(private http: HttpClient) {}

  register(user: User): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(`${this.AUTH_SERVER}/resgister`, user).pipe(
      tap((res: JwtResponse) => {
        if (res) {
          //guardar token
          this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
        }
      })
    );
  }

  login(user: User): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(`${this.AUTH_SERVER}/login`, user).pipe(
      tap((res: JwtResponse) => {
        if (res) {
          //guardar token
          this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
        }
      })
    );
  }

  logout(): void {
    this.token = '';
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('EXPIRES_IN');
  }

  private saveToken(token: string, expiresIn: string): void {
    localStorage.setItem('ACCESS_TOKEN', token);
    localStorage.setItem('EXPIRES_IN', expiresIn);
    this.token = token;
  }

  public getToken(): string | null {
    if (!this.token) {
      this.token = localStorage.getItem('ACCESS_TOKEN');
    }

    return this.token;
  }

  public loggedIn(): boolean {
    return !!AuthService.getStorageObject('ACCESS_TOKEN');
  }

  public getUserInfo() {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  private static getStorageObject(key: string): any {
    if (sessionStorage.getItem(key) === null) {
      return localStorage.getItem(key);
    } else {
      return sessionStorage.getItem(key);
    }
  }
}
