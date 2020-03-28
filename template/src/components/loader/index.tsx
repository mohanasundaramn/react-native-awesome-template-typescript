import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Centre} from '../centre';

/**
 * A simple Cupertino based Loader that displace loader
 * at the center of the screen
 */
export const Loader = () => {
  return (
    <Centre>
      <ActivityIndicator />
    </Centre>
  );
};
