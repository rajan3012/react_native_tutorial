import React, {Component} from 'react';
import {AppRegistry, Text, View, TextInput, Switch} from 'react-native';

export default class Component3 extends Component{
  constructor(){
      super();
      this.state = {
          textValue: 'Hello'
      }
  }    

  onChangeText(value){
    this.setState({
      textValue:value,
      switchValue:false
    });
  }

  onSubmit(){
    console.log("Input submitted:")
  }
  
  onSwitchChange(val){
    console.log(val)
    this.setState({
      switchValue:val
    });    
    
  }
  render(){
    return(
      <View>
        <TextInput
            placeholder="Enter Text"
            value={this.state.textValue}
            onChangeText={(val) => this.onChangeText(val)}
            onSubmitEditing={this.onSubmit}
        />
        <Text>{this.state.textValue}</Text>
        <Switch
          value={this.state.switchValue}
          onValueChange={(val) => this.onSwitchChange(val)}
        />
      </View>

      );
  }
}

//register the component
//parameter1: appname
//parameter2: callback (arrow function)
AppRegistry.registerComponent('Component3', ()=>Component3);

