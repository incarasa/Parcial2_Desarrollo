import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Anime } from './anime';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

private apiUrl = environment.baseUrl + 'anime.json';

constructor(private http: HttpClient) { }

getAnime(): Observable<Anime[]> {
  return this.http.get<Anime[]>(this.apiUrl);

}

}
