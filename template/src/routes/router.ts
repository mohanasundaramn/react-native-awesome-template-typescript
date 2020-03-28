import {NavigationContainerRef} from '@react-navigation/native';
import React from 'react';

export class Router {
  static navigationRef = React.createRef<NavigationContainerRef>();

  // goes back to previous route
  static goBack() {
    return this.navigationRef.current?.goBack();
  }

  /**
   * Navigates to given route
   * @param name {String}
   * @param params {any}
   */
  static navigate(name: String, params?: any) {
    // @ts-ignore
    this.navigationRef.current?.navigate(name, params);
  }

  /**
   * Routes name
   */
  static HomeView = 'HomeView';
  static DetailView = 'DetailView';
}
