import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokedexService } from 'src/app/_services/pokedex.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  pokemon: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private pokedexService: PokedexService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      data => {
        const id = data.get('id');
        this.pokedexService.getPokemonById(id).subscribe(
          response => {
            console.log(response);
            this.pokemon = response;
          },
          error => {
            console.error(error);
          }
        )
      }
    )
  }

}
