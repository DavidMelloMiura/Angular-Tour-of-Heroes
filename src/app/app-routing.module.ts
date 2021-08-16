import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'heroes', component: HeroesComponent},
  {path:'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: HeroDetailComponent }
];
/* caminho:  nome, componente: Nome do componente */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/* Arquivos que geram rotas entra os componetes 
path: uma string que corresponde ao URL na barra de endereço do navegador.
component: o componente que o roteador deve criar ao navegar para esta rota.
Isso informa ao roteador para corresponder a esse URL path: 'heroes' e exibir 
HeroesComponentquando o URL for algo semelhante localhost:4200/heroes.*/