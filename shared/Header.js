import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = ({navigation, title}) => {
    const openMenu = () => {
        navigation.openDrawer();
        // console.log('open');
    }

    return (
        <View style={styles.header}>
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon}/>
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
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
    }
});

export default Header
