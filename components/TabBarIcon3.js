import React from 'react';
import { Entypo } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function TabBarIcon3(props) {
  return (
    <Entypo
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}