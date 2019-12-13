import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PingService {

  constructor(private http: HttpClient) { }

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  public pingBackend(): Observable<string> {
    console.log('pingingBackend :');
    return this.http.get<string>(`${environment.server}/ping`, { headers: this.headers }).pipe(
      map(response => {
        console.log('response : ', response);
        return response;
      })
    );
  }

  // public getActors(): Observable<Array<Actor>> {
  //   return this.http.get<any>(`${environment.server}/actors`, { headers: this.headers }).pipe(
  //     map(response => {
  //       if (response.errors) {
  //         throw response.errors;
  //       }
  //       return response;
  //     })
  //   );
  // }
}
