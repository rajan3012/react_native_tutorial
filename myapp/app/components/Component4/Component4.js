import React, {Component} from 'react';
import {AppRegistry, Text, View, TextInput, ListView, StyleSheet} from 'react-native';

const users = [
    {name: 'Potato Tomato'},
    {name: 'Always McCumin'},
    {name: 'Monu Shonu'},
    {name: 'Bunty Shunty'}
]
export default class Component4 extends Component{
    
    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            userDataSource: ds.cloneWithRows(users),
        };
    }

    renderRow(user, sectionId, rowId, highlightRow){
        return(
        <View style={styles.row}>
           <Text style={styles.rowText}>{user.name}</Text>
        </View>
        )
        console.log(user.name)
    }

    render(){
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
        backgroundColor: '#19f4f1',
        marginBottom: 3
    },
    rowText: {
        flex:1
    }
});

AppRegistry.registerComponent('Component4', () => Component4);