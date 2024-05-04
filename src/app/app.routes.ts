import { Routes } from "@angular/router";
import { AppRoutes } from "./models/enums/AppRoutes";
import { LoginComponent } from "./pages/login/login.component";
import { PokemonListComponent } from "./pages/pokemon-list/pokemon-list.component";

export const routes: Routes = [
  { path: AppRoutes.ROOT, component: LoginComponent },
  { path: AppRoutes.LOGIN, component: LoginComponent },
  { path: AppRoutes.POKEMON_LIST, component: PokemonListComponent },
];
