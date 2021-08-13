/*Você precisará de alguns heróis para exibir.

 Eventualmente, você os obterá de um servidor de dados remoto.
Por enquanto, você criará alguns heróis fictícios e fingirá que vieram do servidor.

Crie um arquivo chamado mock-heroes.tsna src/app/pasta.
Defina uma HEROESconstante como uma matriz de dez heróis e exporte-a.
O arquivo deve ter esta aparência.*/

import { Hero } from './hero';
/* importa a interface Hero do arquivo hero.ts */

/* Constante HEROES: do tipo Hero (da Interface importada acima) 
Logo abaixo uma lista de herois*/
export const HEROES: Hero [] = [
    {id: 1,  name: 'Homem Sereia' },
    {id: 2,  name: 'Mexilhãozinho' },
    {id: 3,  name: 'Tony Full Stark' },
    {id: 4,  name: 'Super VS' },
    {id: 5,  name: 'Tony Starck Overflow' },
    {id: 6,  name: 'Tornado' },
    {id: 7,  name: 'Headbanger' },
    {id: 8,  name: 'Mr Madman' },
    {id: 9,  name: 'Vic Rattlehead' },
    {id: 10, name: 'Eddie the Head' },

];

/* Depois disso esse arquivo foi importado pata heroes.component.ts */