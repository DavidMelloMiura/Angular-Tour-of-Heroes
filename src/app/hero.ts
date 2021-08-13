export interface Hero {
    id: number;
    name: string;
}

/* Interface - Modelo com informações dos herois ,
O que precisa, no modelo um heroi vai ter uma id e nome

export - expostando para poder ser usado em outro lugar

No exemplo apos criar a interface a interface vai ser importada no componente heroes.component.ts
Dessa maneira - import { Hero } from '../hero';

No heroes.component.ts a variavel foi declarada da seguinte forma: (Como exemplo)
hero: Hero = {
    id: 1,  
    name: "Windstrom"
  }; (OBJETO)

  A página não é mais exibida corretamente porque você mudou o herói de uma string para um objeto
  hero = 'Windstorm'; (STRING)

  Na tela aparece dessa forma: [object Object] - Ou seja reconheceu que é um objeto
  */