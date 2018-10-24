"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var mock_pockemons_1 = require("./mock-pockemons");
var DetailPokemonComponent = /** @class */ (function () {
    function DetailPokemonComponent(route, router) {
        this.route = route;
        this.router = router;
        this.pokemons = null; // liste des pok�mons de notre application
        this.pokemon = null; // pok�mon � afficher dans le template
    }
    // on injecte 'route' pour r�cup�rer les param�tres de l'url,
    // et 'router' pour rediriger l'utilisateur.
    DetailPokemonComponent.prototype.ngOnInit = function () {
        // on initialise la liste de nos pok�mons
        this.pokemons = mock_pockemons_1.POKEMONS;
        // on r�cup�re le param�re 'id' contenu dans l'url
        var id = +this.route.snapshot.paramMap.get('id');
        // on it�re sur le tableau de pok�mon ensuite pour trouver
        // le pok�mon ayant le bon identifiant
        for (var i = 0; i < this.pokemons.length; i++) {
            // si on trouve un pok�mon avec le bon identifiant,
            // on affecte ce pok�mon � la propri�t� du composant
            if (this.pokemons[i].id == id) {
                this.pokemon = this.pokemons[i];
            }
        }
    };
    // M�thode permettant de rediriger l'utilisateur
    // vers la page principale de l'application.
    DetailPokemonComponent.prototype.goBack = function () {
        this.router.navigate(['/pokemons']);
    };
    DetailPokemonComponent = __decorate([
        core_1.Component({
            selector: 'detail-pokemon',
            templateUrl: './app/detail-pokemon.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
    ], DetailPokemonComponent);
    return DetailPokemonComponent;
}());
exports.DetailPokemonComponent = DetailPokemonComponent;
//# sourceMappingURL=detail-pokemon.component.js.map