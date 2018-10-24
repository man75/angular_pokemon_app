import { Component ,OnInit} from '@angular/core';
import { Pokemon} from  './pokemon';
import {POKEMONS} from './mock-pockemons';
import { ActivatedRoute, Router, Params } from '@angular/router';
@Component({
  selector: 'list-pokemon',
  templateUrl:'./app/pokemons/list-pokemon.component.html'
  
})
export class ListPokemonComponent  implements OnInit{
    constructor(private router: Router) {};
  pokemons:Pokemon[]=null;
 values='';
 onKey(value:string)
 {
   
   this.values='Bonjour '+value;
 }

  ngOnInit(){
  this.pokemons=POKEMONS;
  }

  selectPokemon(pokemon: Pokemon): void {
   let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
   }

}