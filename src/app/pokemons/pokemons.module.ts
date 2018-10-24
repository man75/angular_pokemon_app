import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';

import { ListPokemonComponent } from './list-pokemon.component';
 import { DetailPokemonComponent } from './detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonRoutingModule } from './pokemons-routing.module';
//import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';

 @NgModule({
     imports: [
         CommonModule,
         PokemonRoutingModule],
   declarations: [
         ListPokemonComponent,
       DetailPokemonComponent,
       BorderCardDirective 
 ],
   providers: []

})
 export class PokemonsModule { }