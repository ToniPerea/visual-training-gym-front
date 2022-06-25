import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {Deserialize, IJsonObject, Serialize} from 'dcerialize';
import {map} from 'rxjs/operators';
import {User} from "../models/user";



@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(userData: User): Observable<User> {
    return this.http.post<IJsonObject>('http://localhost:8080/login', Serialize(userData, () => User)).pipe(
        map(user => Deserialize(user, () => User))
    )

  }
}