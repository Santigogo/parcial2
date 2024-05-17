import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Anime } from './anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

private apirUrl: string = environment.baseUrl;

constructor(private http: HttpClient) { }

getAnimes(): Observable<Anime[]> {
  return this.http.get<Anime[]>(this.apirUrl);
}

}
