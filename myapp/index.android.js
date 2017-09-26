import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
import Component5 from './app/components/Component5/Component5';
import Component6 from './app/components/Component6/Component6';
export default class myapp extends Component{
  renderScene(route,navigator)
  {
    switch(route.id){
      case 'component5':
        return (<Component5 navigator={navigator} title="component5"/>)

      case 'details':
        return (<Component6 user={route.user} navigator={navigator} title="details"/>)
    }
  }
  render(){
    return(
      <Navigator
        initialRoute={{id:'component5'}}
        renderScene={this.renderScene}
        configureScreen={(route,routeStack) => Navigator.SceneConfigs.FloatFromBottom}
        />
    );
  }
}

//register the component
//parameter1: appname
//parameter2: callback (arrow function)
AppRegistry.registerComponent('myapp', ()=>myapp);

