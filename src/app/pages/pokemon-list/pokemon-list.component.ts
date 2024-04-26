import { Component, OnInit } from "@angular/core";
import { PokemonsService } from "./services/pokemons.service";
import { Pokemon } from "../../models/types/Pokemon";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-pokemon-list",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./pokemon-list.component.html",
  styleUrl: "./pokemon-list.component.css",
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private pokemonsService: PokemonsService) {}

  async ngOnInit(): Promise<void> {
    await this.getPokemons();
  }

  async getPokemons() {
    const result = await this.pokemonsService.getPokemons();
    this.pokemons = [...result].sort((a, b) => a.apiId - b.apiId);
  }
}
