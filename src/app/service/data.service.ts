import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  //Get Pokemon
  getPokemons() {
  return this.http.get('https://api.pokemontcg.io/v2/cards?limit=10');
 }
}
