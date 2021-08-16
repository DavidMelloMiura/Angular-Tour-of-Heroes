import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  heroes: Hero[] = []; /* var hero: tipo Hero(interface) recebe vetor*/

  constructor(private HeroService: HeroService) { } /* Injetando o HeroService */

  ngOnInit(): void {
    this.getHeroes(); /* Para carregar o metodo abaixo com a lista de herois OnInit - No inicio do componente*/

    }
  
    getHeroes() { /* Metodo */
      this.HeroService.getHeroes() /* Heroservice que foi injetado no contrutor, recebe getHeroes */
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
      /*  heroes no inicio e no fim pq ele é preguiçoso*/
    }
   

}
