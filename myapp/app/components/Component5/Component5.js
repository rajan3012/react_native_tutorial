import React, {Component} from 'react';
import {AppRegistry, Text, View, TextInput, ListView, StyleSheet, TouchableHighlight} from 'react-native';

export default class Component5 extends Component{
    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            userDataSource:ds,
        };
    }
    
    componentDidMount()
    {
        this.fetchusers();
    }

    fetchusers(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response)=>response.json())
            .then((response) => {
                this.setState({
                    userDataSource: this.state.userDataSource.cloneWithRows(response)
                });
            });
    }

    onPress(user){
        this.props.navigator.push({
            id: 'details',
            user: user 
        });
        console.log(user)
    }

    renderRow(user, sectionId, rowId, highlightRow){
        return(
        <TouchableHighlight onPress={()=>{this.onPress(user)}}>
        <View style={styles.row}>
           <Text style={styles.rowText}>{user.name}:{user.email}</Text>
        </View>
        </TouchableHighlight>
        )
        console.log(user.name)
    }
    render() {
        return(
             
            <ListView
                dataSource = {this.state.userDataSource}
                renderRow = {this.renderRow.bind(this)}
            />
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection:'row',
        justifyContent:'center',
        padding:10,
        backgroundColor: '#21f4f1',
        marginBottom: 3
    },
    rowText: {
        flex:1
    }
});

AppRegistry.registerComponent('Component5',()=>Component5);