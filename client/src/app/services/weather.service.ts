import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
import { Location } from "../interfaces/location";
// TODO; create weather interface and use it in observable type
// import { Weather } from "../interfaces/weather";

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  test(): Observable<any> {
    return this.http.get("/api/hello").pipe(
      tap(_ => console.log(`fetched weather`)),
      catchError(this.handleError("test"))
    );
  }

  getWeather(location): Observable<any> {
    return this.http.post("/api/weather", location, this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError("test"))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
