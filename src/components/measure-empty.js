import React from 'react';
import {View, Button} from 'react-native';
import styled from 'styled-components/native';
import {Text} from './common';

export default props => (
    <View style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Root>
            <Title>
                You haven't added any items yet!
            </Title>

            <Button title="Scan items" {...props}/>
        </Root>
    </View>
);

const Root = styled.View`
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    background-color: transparent;
    border-width: 1px;
    border-color: #D2D2D2;
    border-style: dashed;
    margin: 20px;
    border-radius: 4px;
`;

const Title = styled(Text)`
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 5px;
    text-align: center;
`;
