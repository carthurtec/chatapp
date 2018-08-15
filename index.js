import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';

const chatapp = props =>(
    <App/>
)

AppRegistry.registerComponent('chatapp', () => chatapp);
