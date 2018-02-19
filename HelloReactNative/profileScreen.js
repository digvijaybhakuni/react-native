import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default class ProfileScreen extends React.Component{

    static navigationOptions = {
        title: 'Profile',
    };

    constructor(){
        super();
        this.state = {'repo': 'PRO1'};
    }

    componentWillMount(){
        fetch('https://blooming-citadel-67822.herokuapp.com/users/1')
        .then(res => res.json())
        .then(res => {
            console.log('res', res)
            const user = res;
            
            const state = {...this.state, user};
            this.setState(state);
        })
    }

    render(){
        console.log(this.props);
        return <View style={{flex: 1, flexDirection: 'row'}}>
            <View>
                { 
                    this.state.user ?
                    <View>
                        <Text>Name: {this.state.user.name}</Text>
                        <Text>Email: {this.state.user.email}</Text>
                    </View> :
                    <Text> Loading </Text>
                }
            </View>
        </View>

    }

}

