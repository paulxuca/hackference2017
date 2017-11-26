import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Header, Title, Text} from './common';

export default () => (
    <ScrollView>
        <Header>
            <Title
                style={{
                    color: '#fff',
                    marginLeft: 35
                }}
                >
                Recommendations
            </Title>

            <Text style={{marginLeft: 35, fontWeight: 'normal', fontSize: 14, marginTop: 10, color: '#fff'}}>
                You can save up to <Text style={{fontWeight: 'bold'}}>$15.99</Text> today
            </Text>
        </Header>

        <View style={{marginTop: 20}}>
            <View style={styles.item}>
                <Text style={styles.title}>
                    Buy <Text style={{fontWeight: 'bold'}}>1</Text> less package of <Text style={{fontWeight: 'bold'}}>PC Chicken Breast (5lb)</Text>
                </Text>

                <Text style={styles.recommend}>To save <Text style={{fontWeight: 'bold'}}>$2.99</Text> today</Text>
            </View>

            <View style={styles.item}>
                <Text style={styles.title}>
                    Buy <Text style={{fontWeight: 'bold'}}>3</Text> less bags of <Text style={{fontWeight: 'bold'}}>PC Romaine Lettuce</Text>
                </Text>

                <Text style={styles.recommend}>To save <Text style={{fontWeight: 'bold'}}>$7.99</Text> today</Text>
            </View>

            <View style={styles.item}>
                <Text style={styles.title}>
                    Buy <Text style={{fontWeight: 'bold'}}>2</Text> less bags of <Text style={{fontWeight: 'bold'}}>Tomates ($2.99/pound)</Text>
                </Text>

                <Text style={styles.recommend}>To save <Text style={{fontWeight: 'bold'}}>$5.00</Text> today</Text>
            </View>

            <View style={styles.item}>
                <Text style={styles.title}>
                    Buy <Text style={{fontWeight: 'bold'}}>2</Text> less box of <Text style={{fontWeight: 'bold'}}>Chicken Strips (PC Box)</Text>
                </Text>

                <Text style={styles.recommend}>To save <Text style={{fontWeight: 'bold'}}>$4.99</Text> today</Text>
            </View>
        </View>
    </ScrollView>
);


const styles = StyleSheet.create({
    item: {
        borderColor: '#fff',
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: 'white',
        marginTop: 15,
        borderRadius: 10,
        shadowColor: '#444',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 1,
        marginLeft: 30,
        marginRight: 30,
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    title: {
        fontSize: 15,
        fontWeight: 'normal',
        marginBottom: 10
    },
    recommend: {
        fontSize: 13,
        fontWeight: 'normal'
    }
});