import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class LocationsService {
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  getUserLocations(userId: string): Observable<any> {
    return this.http.get(`/api/locations/${userId}`, this.httpOptions).pipe(
      tap(data => data),
      catchError(this.handleError("test"))
    );
  }

  removeLocation(locationId: string): Observable<any> {
    return this.http
      .delete(`/api/locations/${locationId}`, this.httpOptions)
      .pipe(
        tap(data => data),
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
      console.log(operation);
      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
