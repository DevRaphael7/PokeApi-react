import React from 'react'
import { Box, Input } from 'native-base'
import { StyleSheet } from 'react-native'

export const SearchBar = () => {

    const [getSearch, setSearch] = React.useState("")

    return <Box style={styles.container}>
        <Input 
            onChangeText={setSearch}
            value={getSearch}
            placeholder="Search"
            size="xl"
            w="100%" 
            margin={0}
        />
    </Box>
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        padding: 0
    }
});

