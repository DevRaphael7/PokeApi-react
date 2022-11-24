import React from 'react'
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

export const SearchBar = () => {

    const [getSearch, setSearch] = React.useState("")

    return <SafeAreaView style={styles.container}>
        <TextInput
            style={styles.input}
            onChangeText={setSearch}
            value={getSearch}
            placeholder="Search"
        />
        
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center'
    },
    input: {
      height: 40,
      borderWidth: 2,
      padding: 14,
      borderColor: "#4630eb",
      width: 250,
      backgroundColor: '#fff'
    },
});