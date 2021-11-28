import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PokedexService } from 'src/app/_services/pokedex.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  id: any;
  pokemon: any;
  pokemonForm: FormGroup;
  constructor(
    private pokedexService: PokedexService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
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
    this.activatedRoute.paramMap.subscribe(
      data => {
        this.id = data.get('id');
        this.pokedexService.getPokemonById(this.id).subscribe(
          response => {
            console.log(response),
            this.pokemon = response;
            this.pokemonForm.patchValue(response);
          },
        )   
      }
    )
  }

  updatePokemon(pokemon: any) {
    this.pokedexService.updatePokemon(this.id, pokemon).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/pokemons']);
      },
      error => {
        console.error(error);
      }
    )
  }

}
