import { Pokemon } from "../../../../models/PokeApi.models";
import { ApiController } from "../../../../services/Api.service";

export class ListPokemonService extends ApiController {
    constructor() { 
        super()
    }

    getPokemonData(id: string): Promise<{ data: Pokemon }> {
        return new Promise((resolve, reject) => {
            this.get(id).then((response) => {
                resolve(response as { data: Pokemon })
            }).catch(error => {
                reject(error)
            })
        })
    }
}