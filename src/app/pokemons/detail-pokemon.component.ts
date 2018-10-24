import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pockemons';

@Component({
    selector: 'detail-pokemon',
    templateUrl: './app//pokemons/detail-pokemon.component.html'
})

export class DetailPokemonComponent implements OnInit {
    pokemons: Pokemon[] = null; // liste des pok�mons de notre application
    pokemon: Pokemon = null; // pok�mon � afficher dans le template

    constructor(private route: ActivatedRoute, private router: Router) { }
    // on injecte 'route' pour r�cup�rer les param�tres de l'url,
    // et 'router' pour rediriger l'utilisateur.
    ngOnInit(): void {
        // on initialise la liste de nos pok�mons
        this.pokemons = POKEMONS;
        // on r�cup�re le param�re 'id' contenu dans l'url
        let id = +this.route.snapshot.paramMap.get('id');
        // on it�re sur le tableau de pok�mon ensuite pour trouver
        // le pok�mon ayant le bon identifiant
        for (let i = 0; i < this.pokemons.length; i++) {
            // si on trouve un pok�mon avec le bon identifiant,
            // on affecte ce pok�mon � la propri�t� du composant
            if (this.pokemons[i].id == id) {
                this.pokemon = this.pokemons[i];
            }
        }
    }
    // M�thode permettant de rediriger l'utilisateur
    // vers la page principale de l'application.
    goBack(): void {
        this.router.navigate(['/pokemons']);
    }

}