import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pockemons';

 @Injectable()
 export class PokemonsService {
     // Retourne tous les pokémons
    getPokemons(): Pokemon[] {
    return POKEMONS;
    1 }
  }