/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux';
import Navigation from './Routes'
import Store from './Store'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={Store}>
          <Navigation ref={(nav) => this.navigator = nav} />
      </Provider>
    );
  }
}


