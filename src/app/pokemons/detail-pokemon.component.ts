import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pockemons';
import { PokemonsService } from './pokemons.service';

@Component({
    selector: 'detail-pokemon',
    templateUrl: './app//pokemons/detail-pokemon.component.html',
    // on déclare un fournisseur pour le service.
     providers: [PokemonsService]
})

export class DetailPokemonComponent implements OnInit {
  
    pokemon: Pokemon = null; // pok�mon � afficher dans le template

    constructor(private route: ActivatedRoute, 
        private router: Router,
        private pokemonService: PokemonsService) { }
    // on injecte 'route' pour r�cup�rer les param�tres de l'url,
    // et 'router' pour rediriger l'utilisateur.
    ngOnInit(): void {
        let id = +this.route.snapshot.paramMap.get('id');
        this.pokemon = this.pokemonService.getPokemon(id);

    }
    // M�thode permettant de rediriger l'utilisateur
    // vers la page principale de l'application.
    goBack(): void {
        window.history.back();
    }

}