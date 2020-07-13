import React from 'react';
import {StyleSheet, Text,View} from 'react-native';

function LibraryScreen({navigation}) {
    
    return(
        <View style={styles.container}>
            <Text onPress={() => navigation.navigate("book", {title: "SDA - Commu"})}>
                Seigneur des anneaux: La communauté de l'anneau
            </Text>
            <Text>Seigneur des anneaux: Les 2 tours</Text>
            <Text>Seigneur des anneaux: Le retour du roi</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})

export default LibraryScreen;