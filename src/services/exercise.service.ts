import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Exercise} from "../models/exercise";
import {Observable} from "rxjs";
import {Deserialize, IJsonObject, Serialize} from "dcerialize";
import {map} from "rxjs/operators";


@Injectable({
    providedIn: "root"
})
export class ExerciseService {
    constructor(private http: HttpClient) {
    }

    add(exerciseData: Exercise): Observable<Exercise> {
        return this.http.post<IJsonObject>('http://localhost:8080/exercise', Serialize(exerciseData, () => Exercise)).pipe(
            map(exercise => Deserialize(exercise, () => Exercise))
        )
    }

    get(exerciseID: string): Observable<Exercise> {
      return this.http.get<IJsonObject>(`http://localhost:8080/getTraining/${exerciseID}`)
          .pipe(map(exercise => Deserialize(exercise, () => Exercise)))
    }

    put(exerciseData: Exercise): Observable<Exercise> {
        return this.http.put<IJsonObject>('http://localhost:8080/updateExercise', Serialize(exerciseData, () => Exercise)).pipe(
            map(exercise => Deserialize(exercise, () => Exercise))
        )
    }

    delete(exerciseID: string): Observable<null> {
        return this.http.delete<null>(`http://localhost:8080/deleteExercise/${exerciseID}`)
    }
}