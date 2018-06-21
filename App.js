import React, {Component} from 'react';
import theme from 'react-native-theme';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import RootNavigator from './src/views/navigation/index'
import {hideWarnings} from "./src/helpers/common";


hideWarnings();

export default class App extends Component {

    componentDidMount() {
        theme.setRoot(this);
    }

    render() {
        return (
            <Provider store={store}>
                <RootNavigator/>
            </Provider>
        );
    }

}