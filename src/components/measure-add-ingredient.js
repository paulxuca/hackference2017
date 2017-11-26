import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import Camera from '../containers/measure-camera';
import MeasureAddIngredientForm from '../containers/measure-add-ingredient-form';

const Root = styled.View`
    height: 400px;
    width: 100%;
    flex: 1;
`;

export default ({isCameraOpen, isFillingDetails}) => (
    <Root>
        {isCameraOpen && <Camera/>}
        {isFillingDetails && <MeasureAddIngredientForm/>}
    </Root>
);
