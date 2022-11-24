import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';


export default function Aviso({ data, deleteItem }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={deleteItem}>
                <AntDesign name="delete" size={24} color="#000" />
            </TouchableOpacity>

            <Text>{data.item}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        backgroundColor: '#D5A637',
        marginTop: 12,
        padding: 12,
        borderRadius: 4,
        flexDirection: 'row',
        marginLeft: 15,
        //Android
        elevation: 4,
        //IOS
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 1.00,
        shadowRadius: 4.00,
    },
    button: {
        marginLeft: 260,
        position: 'absolute',
    }
})
