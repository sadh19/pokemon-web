import { Injectable } from "@angular/core";
import { Apollo, gql, QueryRef } from "apollo-angular";
import { Pokemon } from "../../../models/types/Pokemon";

@Injectable({
  providedIn: "root",
})
export class PokemonsService {
  private loadPokemonsQuery: QueryRef<{ pokemons: Pokemon[] }>;

  constructor(private apollo: Apollo) {
    this.loadPokemonsQuery = this.apollo.watchQuery({
      query: gql`
        query {
          pokemons {
            id
            apiId
            name
            image
            height
            weight
            type
          }
        }
      `,
    });
  }

  async getPokemons(): Promise<Pokemon[]> {
    const result = await this.loadPokemonsQuery.refetch();
    return result.data.pokemons;
  }
}
