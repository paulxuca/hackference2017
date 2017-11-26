import React from 'react';
import {ScrollView, View} from 'react-native';
import {ScreenWrapper, Header, Title} from './common';
import MeasureAddIngredient from '../containers/measure-add-ingredient';
import IngredientList from '../containers/ingredient-list';

const Aux = ({children}) => children;

export default function Measure({isAddingIngredient}) {
    return (
        <ScrollView>
            {!isAddingIngredient && (
                <Aux>
                    <Header>
                        <Title
                            style={{
                                color: '#fff',
                                marginLeft: 35
                            }}
                            >
                            Measure
                        </Title>
                    </Header>
            
                    <IngredientList/>
                </Aux>
            )}
    
            {isAddingIngredient && (
                <MeasureAddIngredient/>
            )}
        </ScrollView>
    );
}
