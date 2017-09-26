import React, {Component} from 'react';
import {AppRegistry, Text, View, TextInput, Button, ListView, StyleSheet} from 'react-native';

export default class Component6 extends Component{
    constructor(props){
        super(props);
        console.log(this.props.user)
        this.state = {
           name: this.props.user.name,
           email: this.props.user.email
       }
    }

    handlePress(){
        this.props.navigator.push({
            id:'component5'
            }
        );
    }

    render(){
        return(
            <View>
                <Text>Name:{this.state.name}</Text>
                <Text>Name:{this.state.email}</Text>
                <Button
                    onPress={this.handlePress.bind(this)}
                    title="Back"
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('Component6',()=>Component6);