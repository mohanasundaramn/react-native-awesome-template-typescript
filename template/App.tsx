import React from 'react';
import {NetworkProvider} from 'react-native-offline';
import {Provider as ThemeProvider, Theme} from 'react-native-paper';
import {connect} from 'react-redux';
import {IUiState} from './src/models/uiStoreModel';
import {AppState} from './src/redux/store';
import {AppDarkTheme, AppLightTheme} from './src/themes/appTheme';
import RootNavigator from './src/views/rootNavigator';

/**
 * Interfaces
 */
interface IAppProps {
  theme: Theme;
  uiReducer: IUiState;
}

const App: React.FC<IAppProps> = (props: IAppProps) => {
  const {uiReducer} = props;
  const {isDark} = uiReducer;

  return (
    <NetworkProvider>
      <ThemeProvider theme={isDark ? AppDarkTheme : AppLightTheme}>
        <RootNavigator />
      </ThemeProvider>
    </NetworkProvider>
  );
};

const mapStateToProps = (state: AppState) => ({
  uiReducer: state.uiReducer,
});

export default connect(mapStateToProps, null)(App);
