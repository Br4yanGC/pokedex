import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(
    private http: HttpClient
  ) { }

  getPokemons() {
    return this.http.get<any>('http://localhost:3000/pokemons')
  }
  getPokemonById(id: any) {
    return this.http.get<any>(`http://localhost:3000/pokemons/${id}`)
  }
  insertPokemon(pokemon: any) {
    return this.http.post<any>('http://localhost:3000/pokemons', pokemon)
  }
  updatePokemon(id: any, pokemon: any) {
    return this.http.put<any>(`http://localhost:3000/pokemons/${id}`, pokemon)
  }
  deletePokemon(id: any) {
    return this.http.delete<any>(`http://localhost:3000/pokemons/${id}`)
  } 
}
