import React from 'react';
import {View} from 'react-native';
import {RkButton} from 'react-native-ui-kitten';

export default function Add(props) {
    return (
        <View style={{margin: 20, flex: 1}}>
            <RkButton style={{width: '100%', backgroundColor: 'transparent', borderStyle: 'solid', borderColor: '#000', borderWidth: 1, padding: 10}} contentStyle={{color: '#000', fontSize: 14, fontWeight: 'bold'}} {...props}>
                ADD ITEM
            </RkButton>
        </View>
    );
}