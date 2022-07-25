import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, Observable} from 'rxjs';
import {Deserialize, DeserializeArray, IJsonArray, IJsonObject, Serialize} from 'dcerialize';
import {map, tap} from 'rxjs/operators';
import {User} from '../models/user';
import {CustomSnackbarService} from './custom-snackbar.service';
import {JwtResponse} from '../models/jwt-response';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient,
                private snackbarService: CustomSnackbarService) {
    }

    register(userData: User): Observable<User> {
        return this.http
            .post<IJsonObject>(
                'http://localhost:8080/register',
                Serialize(userData, () => User)
            )
            .pipe(map((user) => Deserialize(user, () => User)),
                catchError((err: HttpErrorResponse) => this.snackbarService.showError(err)));
    }

    put(userEmail: string | null, userData: User): Observable<JwtResponse> {
        return this.http
            .put<JwtResponse>(
                `http://localhost:8080/updateUser/${userEmail}`,
                Serialize(userData, () => User)
            )
            .pipe(
                tap((res: JwtResponse) => {
                    if (res) {
                        //guardar token
                        localStorage.removeItem('ACCESS_TOKEN');
                        localStorage.removeItem('EXPIRES_IN');
                        localStorage.setItem('ACCESS_TOKEN', res.dataUser.accessToken);
                        localStorage.setItem('EXPIRES_IN', res.dataUser.expiresIn);
                    }
                })
            );
    }

    get(userEmail: string): Observable<User> {
        return this.http
            .get<IJsonObject>(`http://localhost:8080/getUserByEmail/${userEmail}`)
            .pipe(map((user) => Deserialize(user, () => User)));
    }

    getUsersList(): Observable<Array<User>> {
        return this.http
            .get<IJsonArray>(`http://localhost:8080/getUsersList`)
            .pipe(map((usersList) => DeserializeArray(usersList, () => User)));
    }
}
