import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = ({ navigation, title }) => {
    const openMenu = () => {
        navigation.openDrawer();
        // console.log('open');
    }

    return (
        <ImageBackground style={styles.header} source={require('../assets/game_bg.png')}>
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
            <View style={styles.miniHeader}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}/>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 16,
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10
    },
    miniHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    }
});

export default Header
