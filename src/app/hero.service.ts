
import { Injectable } from '@angular/core';

import { Hero } from './hero' /* Importação da interface Hero */
import { HEROES } from './mock-heroes'; /* Importação do array const HEROES */
/* Para o serviço! fornecer essa lista para os componentes - no caso, o metodo getHeroes
que exporta a classe para ser utilizada em outros componentes */

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service'


@Injectable({
  providedIn: 'root'
})
export class HeroService {
 
  constructor(private messageService: MessageService) { }

  /* Esse método getHeroes() foi setado como interface Hero[](array) - return o Array Const HEROES*/
  /* getHeroes(): Hero[] {
    return HEROES; 
  } */
 /*Esse metodo foi retirado para poder utilizar o Observable */

 /* getHeroes(): Observable<Hero[]> {
   const heroes = of(HEROES);
   return heroes;
 } */

 /* Metodo getHeroes observa interface Hero */
 getHeroes():Observable<Hero[]> {
   const heroes = of(HEROES); /* cria constante  */
   this.messageService.add('HeroService: fetched heroes');
   return heroes;
 }
 /* getHeroes()método para enviar uma mensagem quando os heróis forem buscados. */







}
