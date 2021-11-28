import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokedexService } from 'src/app/_services/pokedex.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.page.html',
  styleUrls: ['./delete.page.scss'],
})
export class DeletePage implements OnInit {
  id: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private pokedexService: PokedexService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      data => {
        this.id = data.get('id')
      }
    )
  }
  deletePokemon(id: any) {
    this.pokedexService.deletePokemon(id).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/pokemons']);
      }
    )
  }  
}
