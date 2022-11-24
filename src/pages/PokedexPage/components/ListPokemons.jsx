import { useState } from "react";
import { StyleSheet, View, FlatList } from 'react-native'
import { CardPokemon } from "./CardPokemon";
import { ListPokemonService } from "./services/ListPokemons.service";

const TOTAL_POKEMONS = 60;

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
});

export const ListPokemons = () => {

    const service = new ListPokemonService();

    const [getPokemons, setPokemons] = useState([]);

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

    initialProgram().then(value => setPokemons(value))

    return <View style={styles.container}> 
            { getPokemons.length == TOTAL_POKEMONS - 1 ? 
                <FlatList
                    data={getPokemons}
                    renderItem={({item}) => <CardPokemon value={item} />}
                    numColumns={2}
                /> : null
            }
        </View>
}