import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PokedexService } from 'src/app/_services/pokedex.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {
  pokemonForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private pokedexService: PokedexService,
    private router: Router
  ) { 
    this.pokemonForm = this.formBuilder.group({
      name: [''],
      height: [''],
      weight: [''],
      category: [''],
      ability: [''],
      type: [''],
      src_img: ['']
    })
  }

  ngOnInit() {
  }

  addPokemon(values: any) {
    this.pokedexService.insertPokemon(values).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/pokemons'])
      },
      error => {
        console.error(error)
      }
    )
  }
}
