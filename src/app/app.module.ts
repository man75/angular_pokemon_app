
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PokemonsModule } from './pokemons/pokemons.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { PokemonTypeColorPipe } from './pokemons/pokemon-type-color.pipe';

@NgModule({
    imports: [BrowserModule, PokemonsModule, AppRoutingModule],

    declarations: [
        AppComponent,
        PageNotFoundComponent,
        PokemonTypeColorPipe],
        bootstrap: [AppComponent]
})
export class AppModule { }