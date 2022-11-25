import { StyleSheet } from 'react-native'
import { Pressable, Stack, Box, Text, Image, Modal } from 'native-base'
import { useState } from 'react'

const styles = StyleSheet.create({
    container: {
        marginVertical: 10
    },
    title: {
        'fontSize': 14,
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

    const [getShowModal, setShowModal] = useState(false)

    return <>

        <Modal 
            isOpen={getShowModal} 
            onClose={() => setShowModal(false)}
            size="lg">
            <Modal.Content maxH="212">
                <Modal.CloseButton />
                <Modal.Header>Contact Us</Modal.Header>
                <Modal.Body backgroundColor="#fff" w="100%">
                    Por quebhhughghg
                </Modal.Body>
            </Modal.Content>
        </Modal>

        <Pressable style={styles.container} w={'full'} onFocus={() => setShowModal(true)}>
            {({
                isHovered,
                isFocused,
                isPressed
            }) => { 
                return <Box
                    w={300} 
                    borderWidth="1" 
                    borderColor="coolGray.200" 
                    rounded="lg"
                    padding={2.5}
                    bg={isPressed ? 'coolGray.200' : isFocused ? 'amber.200' : 'coolGray.100'}>

                        <Image size={90} borderRadius={10} resizeMode="cover" source={{
                            uri: value.img
                        }} alt={value.name} />
                        
                        <Stack direction="row" marginTop={2}>
                            <Text style={styles.title} marginRight={1.5} bold>{ value.name }</Text>
                            <Text style={styles.typeText} thin>{ value.type }</Text>
                        </Stack>

                </Box>
            }}

        </Pressable>
    </> 
}