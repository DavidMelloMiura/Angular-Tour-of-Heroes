import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

/* Importação da lista de Heois (mock-heroes) */
/* import { HEROES } from '../mock-heroes'; */
/* Importação acima foi removida para poder injetar os herois atraves de um service
abaixo */
import { HeroService } from '../hero.service'; 
import { MessageService } from '../message.service';

/*@Component é uma função decoradora que especifica os metadados angulares para o componente.*/
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html', /* Html - Estrutura */
  styleUrls: ['./heroes.component.css'] /* css - Estilo */
})
export class HeroesComponent implements OnInit {

/* Cria uma var selectedHero do tipo Hero(interface) coloca ? para não ser obrigatorio ter um valor
   Pois essa var começará vazia e assim vai apresentar erro, quando usar essa var no metodo abaixo  */
   selectedHero?: Hero;


  /* hero: Hero = {
    id: 1,  
    name: "Windstrom"
  }; */
  
/*heroes recebe a constante HEROES que é um Array de mock-heroes.ts */
  /* heroes = HEROES; */ /* import { HEROES } from '../mock-heroes'; */
  /* Com essa mudança de pegar os heroes através do serviço devemos mudar a declaração da var
  para: */
  heroes: Hero[] = []; /* var heroes do tipo interface Hero
  Quando uma var esta vinculada a uma interface, devemos sempre declarar o tipo interface
  :nome da interface */


  






  constructor(private HeroService: HeroService, private MessageService: MessageService) { }
  /* Depois de importar o serviço para pegar a lista de herois devemos adicionar ao construtor */
  


  /* método para recuperar os heróis do serviço. */
  /* heroes da variavel acima - heroes: Hero[] = []; que recebe o contrutor
  que pega o metodo do service: 
  getHeroes(): Hero[] {
    return HEROES; 
  }*/
  /* getHeroes(): void {
    this.heroes = this.HeroService.getHeroes();  
  } */

 /* Esse metodo acima foi substituido por esta abaixo
    para poder usar o metodo usando o service */

  getHeroes(): void { /*Metodo getHeros() do OnInit */
    this.HeroService.getHeroes() /* HeroService do construtor puxando o metodo getHeroes do service */
    .subscribe(heroes => this.heroes = heroes);
  }
     
/* 
 heroes => this.heroes = heroes
Esse de cima é igual a esse de baixo
  function (heroes){
     this.heroes = heroes;
  } */


/*Metodo disparado pelo (click) na lista que será criada pelo ngFor*/
  onSelect(hero: Hero): void { /*Se não colocar o tipo aparece o erro com mouse em cima que precisa ter tipo */
    this.selectedHero = hero;
    this.MessageService.add('HeroesComponent: Selected hero id=${hero.id}');
    
      /* selectedHero recebe hero de cima (hero: Hero) este recebe */
      /* void significa que esse metodo não vai retornar valor
      só vai atribuir o valor na var selectedHero la em cima */
  }

  ngOnInit(): void {
    this.getHeroes(); /* Carrega herois logo no inicio */

  }

}
