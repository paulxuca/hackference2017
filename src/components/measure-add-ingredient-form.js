import React, {Component} from 'react';
import {View, Image, StyleSheet, Slider} from 'react-native';
import styled from 'styled-components/native';
import {RkTextInput, RkButton} from 'react-native-ui-kitten';
import {Text} from './common';

export default class Form extends Component {
    constructor() {
        super();

        this.state = {amt: 0};
    }

    render() {
        const {image, unitName, name, price} = this.props;

        return (
            <View style={{flex: 1}}>
                <Img source={{uri: image}} style={{height: 200, flex: 1}}/>
                <View style={{margin: 20}}>
                    <Title>{name}</Title>
                    <Text>{price}</Text>
                    
                    <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{flex: 2.5}}>
                            <RkTextInput onChange={v => this.setState({amt: v})} rkType="bordered" placeholder="5"/>
                        </View>
        
                        <View style={{flex: 1}}>
                            <Text style={{marginLeft: 10, fontSize: 12, fontWeight: 'normal'}}>
                                {unitName.toUpperCase()} PURCHASED
                            </Text>
                        </View>
                    </View>
        
                    <View style={{flex: 1, marginTop: 20}}>
                        <RkButton onPress={this.props.onSubmit} style={{width: '100%', backgroundColor: '#7c85c2'}}>
                            Add item
                        </RkButton>
                    </View>
                </View>
            </View>
        );
    }
}

const Img = styled.Image`
    width: 100%;
    flex: 0.5;
`;

const Title = styled(Text)`
    font-size: 26px;
    margin-bottom: 3px;
    font-weight: 700;
`;
