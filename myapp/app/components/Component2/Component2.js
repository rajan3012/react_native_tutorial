import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet,TouchableHighlight, TouchableOpacity} from 'react-native';

export default class Component2 extends Component
{
    onPress1(){
        console.log("Area1 Pressed");
    }
    onPress2(){
        console.log("Area2 Pressed");
    }

    render() {
        return (
            <View>
                <View style={styles.myView}>
                    <Text style={styles.myText}>Heyo Rajan</Text>
                </View>
                <View style={styles.container}>
                    <TouchableHighlight
                        onPress = {this.onPress1}
                        style={styles.v1}
                        underlayColor="blue"
                    >
                    <View>
                        <Text>View 1</Text>
                    </View>
                    </TouchableHighlight>
                    <TouchableOpacity
                        onPress = {this.onPress2}
                        style={styles.v2}
                    >
                    <View style={styles.v2}>
                        <Text>View 2</Text>
                    </View>
                    </TouchableOpacity>
                    <View style={styles.v3}>
                        <Text style={styles.vText}>View 3</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    myView: {
        backgroundColor: 'blue' 
    },
    myText: {
        color: 'white'
    },
    container : {
        flexDirection:'row',
        height:100
    },
    v1:{
        flex:1,
        backgroundColor:'green',
        padding:10
    },
    //flex  - grid pattern for UI
    v2:{
        flex:3,
        backgroundColor:'red',
        padding:10
    },
    v3:{
        flex:1,
        backgroundColor:'yellow',
        padding:10
    },
    vText:{
        color:'red'
    }
} );
//register the component
//parameter1: appname
//parameter2: callback (arrow function)
AppRegistry.registerComponent('Component2', ()=>Component2);

