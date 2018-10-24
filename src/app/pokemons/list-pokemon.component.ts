import { Component ,OnInit} from '@angular/core';
import { Pokemon} from  './pokemon';
import {POKEMONS} from './mock-pockemons';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PokemonsService } from './pokemons.service';
@Component({
  selector: 'list-pokemon',
  templateUrl:'./app/pokemons/list-pokemon.component.html',
  providers: [PokemonsService]
  
})
export class ListPokemonComponent  implements OnInit{
    constructor(private router: Router,private pokemonsService: PokemonsService) {};
  
  pokemons:Pokemon[]=null;
 
 values='';
 onKey(value:string)
 {
   
   this.values='Bonjour '+value;
 }

  ngOnInit(){
  //this.pokemons=POKEMONS;
  this.pokemons = this.pokemonsService.getPokemons();
  }

  selectPokemon(pokemon: Pokemon): void {
   let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
   }

}