import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class Component1 extends Component
{
    constructor(props){
        super(props);
        this.state = {
            name:'Rajan',
            showName: true,
            message: this.props.message
        }
    }

    static defaultProps = {
        message: 'Heyooo'
    }
    render() {
        console.log()
        let name = this.state.showName ? this.state.name : 'No name';
        return (
            <View>
                <Text>{this.state.message}</Text>
                <Text>{name}</Text>
            </View>

        );
    }
}

//register the component
//parameter1: appname
//parameter2: callback (arrow function)
AppRegistry.registerComponent('Component1', ()=>Component1);

