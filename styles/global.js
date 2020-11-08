import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    title: {
        fontFamily: 'nunito-bold',
        fontSize: 20,
        color: 'red',
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
});

export default globalStyles