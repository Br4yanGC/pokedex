import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../_services/pokedex.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.page.html',
  styleUrls: ['./pokemons.page.scss'],
})
export class PokemonsPage implements OnInit {
  pokemons: any[];
  
  constructor(
    private pokedexService: PokedexService
  ) {}

  ngOnInit() {
    this.pokedexService.getPokemons().subscribe(data =>{
      this.pokemons = data;
    })
  }

  ionViewWillEnter(): void {
    this.pokedexService.getPokemons().subscribe(data => {
      this.pokemons = data;
    })
  }

}
