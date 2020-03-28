import React from 'react';
import * as Animatable from 'react-native-animatable';
import {NetworkConsumer} from 'react-native-offline';
import {Text} from 'react-native-paper';
import styled from 'styled-components/native';

/**
 * Offline Component display online/offline status at the top
 * of the screen
 *
 * TODO:
 * [*] Display online/offline based on connection change.
 * [ ] Hide online after internet connection state changes to active.
 */

export const Offline = () => {
  return (
    <NetworkConsumer>
      {({isConnected}) => {
        console.log(`isConnected: ${isConnected}`);
        return (
          <>
            {isConnected ? (
              <Animatable.View transition={['opacity']}>
                <OnlineContainer>
                  <Text>online</Text>
                </OnlineContainer>
              </Animatable.View>
            ) : (
              <Animatable.View
                easing="ease-in-out-sine"
                animation="slideInDown"
                direction="alternate">
                <OfflineContainer>
                  <Text>offline</Text>
                </OfflineContainer>
              </Animatable.View>
            )}
          </>
        );
      }}
    </NetworkConsumer>
  );
};

const OnlineContainer = styled.View`
  height: 30px;
  background-color: green;
  justify-content: center;
  align-items: center;
`;

const OfflineContainer = styled.View`
  height: 30px;
  background-color: red;
  justify-content: center;
  align-items: center;
`;
