import { ListPokemons } from './components/ListPokemons'
import { SearchBar } from './components/SearchBar'

export const PokedexPage = () => {

    return <div style={{
        'display': 'grid', 
        'justifyContent': 'center'}}
    >
        <SearchBar />
        <ListPokemons />
    </div>
}