import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

/* Importação da lista de Heois (mock-heroes) */
import { HEROES } from '../mock-heroes';

/*@Component é uma função decoradora que especifica os metadados angulares para o componente.*/
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html', /* Html - Estrutura */
  styleUrls: ['./heroes.component.css'] /* css - Estilo */
})
export class HeroesComponent implements OnInit {

  /* hero: Hero = {
    id: 1,  
    name: "Windstrom"
  }; */
  
/*heroes recebe a constante HEROES que é um Array de mock-heroes.ts */
  heroes = HEROES;

/* Cria uma var selectedHero do tipo Hero(interface) coloca ? para não ser obrigatorio ter um valor
   Pois essa var começará vazia e assim vai apresentar erro, quando usar essa var no metodo abaixo  */
  selectedHero?: Hero;

  constructor() { }
  
/*Metodo disparado pelo (click) na lista que será criada pelo ngFor*/
  onSelect(hero: Hero): void { /*Se não colocar o tipo aparece o erro com mouse em cima que precisa ter tipo */
    this.selectedHero = hero;
      /* selectedHero recebe hero de cima (hero: Hero) este recebe */
      /* void significa que esse metodo não vai retornar valor
      só vai atribuir o valor na var selectedHero la em cima */
  }

  ngOnInit(): void {

  }

}
