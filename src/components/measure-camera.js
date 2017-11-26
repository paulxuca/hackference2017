import React, {Component} from 'react';
import styled from 'styled-components/native';
import {View} from 'react-native';
import {Camera, Permissions} from 'expo';

export default class MeasureCamera extends Component {
    constructor() {
        super();

        this.state = {
            status: null
        };

        this.onBarCode = this.onBarCode.bind(this);
    }

    async componentWillMount() {
        const {status} = await Permissions.askAsync(Permissions.CAMERA);

        this.setState({status: status === 'granted'});
    }

    onBarCode() {
        this.props.onBarCode();
    }

    render() {
        const {status} = this.state;

        if (status === null || status === false) {
            return null;
        }

        return (
            <View style={{flex: 1}}>
                <Camera onBarCodeRead={this.onBarCode} style={{flex: 1}} type={Camera.Constants.Type.back}/>
            </View>
        );
    }
}

