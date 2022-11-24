import { Image, StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
    pokeImg: {
        height: 90,
        width: 90,
        borderRadius: '50%',
        resizeMode: 'cover'
    },
    title: {
        'fontSize': 14,
        fontWeight: 'bold',
        backgroundColor: '#a3db20',
        padding: 5,
        borderRadius: 10,
        color: '#fff',
        textTransform: 'uppercase'
    },
    typeText: {
        fontSize: 14,
        fontWeight: '200',
        backgroundColor: '#ff6c37',
        padding: 5,
        color: '#fff',
        borderRadius: 10,
    }
});

export const CardPokemon = ({ value }) => {
    return <div style={{
        'backgroundColor': '#fff',
        'margin': '10px',
        'padding': '10px',
        'borderRadius': '10px',
        width: '200px',
        height: '160px',
    }}>
        <Image
            style={styles.pokeImg}
            source={value.img}
        />
        <Text style={styles.title}>{ value.name }</Text>
        <br />
        <br />
        <Text style={styles.typeText}>{ value.type }</Text>
    </div>
}