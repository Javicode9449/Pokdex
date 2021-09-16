import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponentComponent } from './loading-component/loading-component.component';
import { HeaderComponent } from './header/header.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';

const routes: Routes = [
  { path: '', component: LoadingComponentComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'pokemon-card', component: PokemonCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
