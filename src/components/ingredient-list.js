import React from 'react';
import styled from 'styled-components/native';
import {View, Image} from 'react-native';
import {RkCard} from 'react-native-ui-kitten';
import {Text} from './common';
import AddPrompt from '../containers/prompt';
import Empty from '../containers/measure-empty';

export default function IngredientList({ingredients}) {
    if (ingredients.length === 0) {
        return <Empty/>;
    }

    return (
        <List style={{flex: 1, margin: 30}}>
            {ingredients.map((ingredient, idx) => (
                <RkCard style={{margin: 5, flexDirection: 'row'}} key={idx}>
                    <View style={{flex: 4, padding: 20}}>
                        <ItemName>{ingredient.name}</ItemName>

                        <Text style={{marginTop: 10, opacity: 0.8, fontSize: 12, fontWeight: 'bold'}}>
                            {`${ingredient.units} ${ingredient.unitName} purchased`.toUpperCase()}
                        </Text>
                    </View>

                    <View style={{flex: 1}}>
                        <View style={{minWidth: 4,
                    height: '100%',
                    backgroundColor: '#f0f0f0', justifyContent: 'flex-end', flex: 1, position: 'absolute', right: 0}}>
                        <View style={{minHeight: '50%', width: '100%', minWidth: 4, flex: 1, backgroundColor: '#7c85c2'}}/>
                    </View>
                    </View>
                </RkCard>
            ))}

            <AddPrompt/>
        </List>
    );
}

const List = styled.View`
    margin: 20px;
`;

const Item = styled.View`
    padding: 20px;
    border-radius: 3;
    margin-bottom: 5px;
`;

const ItemName = styled(Text)`
    font-weight: 700;
    font-size: 22px;
`;