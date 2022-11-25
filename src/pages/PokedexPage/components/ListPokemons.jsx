import { useState, useRef } from "react";
import { CardPokemon } from "./CardPokemon";
import { ListPokemonService } from "./services/ListPokemons.service";
import { Box, Modal, Center } from 'native-base'

const TOTAL_POKEMONS = 60;

export const ListPokemons = () => {

    const service = new ListPokemonService();

    const [getPokemons, setPokemons] = useState({
        showPokemons: false,
        pokemons: []
    });

    const initialProgram = async () => {
        const pokemons = []

        for(let i = 1; i < TOTAL_POKEMONS; i++) {
            const response = await service.getPokemonData(i.toString())

            const svg = response.data.sprites.other ? 
                response.data.sprites.other.dream_world.front_default : ""

            pokemons.push({
                name: response.data.name,
                img: svg,
                type: response.data.types[0].type.name
            })
        }

        return pokemons
    }

    initialProgram().then(value => setPokemons({
        showPokemons: true,
        pokemons: value
    }))

    return <>
        <Center>
            { getPokemons.showPokemons ? getPokemons.pokemons.map(item => <CardPokemon value={item} />) : null }
        </Center>
    </>
}