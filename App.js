import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export class MyButton extends Component{
render(){
  return(
    <Button color="blue" title="Click Me!">
    </Button>
  )
}
}
export default class App extends Component {
  render() {
    return (
      <View style={{marginTop: 200, marginLeft: 100, width: "50%"}}>
      <MyButton/>
        <Text>My first react Component</Text>
        </View>

    );
  }
}