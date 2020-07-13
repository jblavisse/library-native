import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

function HomeScreen({navigation, route}) {
    function navigateToDetails() {
        navigation.navigate("details");
    }

    return(
        <View style={styles.container}>
            <Text>Bienvenue dans ma page d'accueil!</Text>
            <Button title="Voir des détails!" onPress={navigateToDetails} />
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
  });

  
export default HomeScreen;