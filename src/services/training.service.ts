import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Deserialize, IJsonObject, Serialize} from "dcerialize";
import {map} from "rxjs/operators";
import {Training} from "../models/training";


@Injectable({
    providedIn: "root"
})

export class TrainingService {
    constructor(private http: HttpClient) {
    }

    add(trainingData: Training): Observable<Training> {
        console.log(trainingData)
        return this.http.post<IJsonObject>('http://localhost:8080/training', Serialize(trainingData, () => Training)).pipe(
            map(training => Deserialize(training, () => Training))
        )
    }


}