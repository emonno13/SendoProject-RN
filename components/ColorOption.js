import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';
import NumericInput, { calcSize } from 'react-native-numeric-input';

export default class ColorOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      valuee: ''
    };
  }
  updateUser = (color) => {
    this.setState({ color: color })
  }
  render() {
    return (
      <View style={{ flexDirection: 'row', justifyContent:'space-between',alignItems:'stretch'}}>
        <View>
          <Picker style={{width:250,height:50}} selectedValue={this.state.color} onValueChange={this.updateUser}>
            <Picker.Item label="Red" value="Red" />
            <Picker.Item label="Blue" value="Blue" />
            <Picker.Item label="Green" value="Green" />
          </Picker>
        </View>

        <NumericInput
          minValue = {0}
          //value={this.state.valuee}
          onChange={valuee => this.setState({ valuee })}
          totalWidth={100}
          totalHeight={50}
          iconSize={25}
          step={1}
          valueType='real'
          rounded
          textColor='#B0228C'
          iconStyle={{ color: 'white' }}
          rightButtonBackgroundColor='#EA3788'
          leftButtonBackgroundColor='#E56B70' />
      </View>
    );
  }
}
