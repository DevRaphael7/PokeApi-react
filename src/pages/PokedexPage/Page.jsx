import { ListPokemons } from './components/ListPokemons'
import { SearchBar } from './components/SearchBar'
import { Box } from 'native-base'

export const PokedexPage = () => {

    return <Box background="blueGray.200">
        <Box alignSelf={'center'} >
            <SearchBar />
            <ListPokemons />
        </Box>
    </Box> 
}