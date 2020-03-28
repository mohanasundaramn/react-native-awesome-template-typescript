import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Theme, withTheme} from 'react-native-paper';
import {connect} from 'react-redux';
import {IUiState} from '../models/uiStoreModel';
import {AppState} from '../redux/store';
import {Router} from '../routes/router';
import {AppDarkTheme, AppLightTheme} from '../themes/appTheme';
import DetailView from './detailView';
import HomeView from './homeView';

const Stack = createStackNavigator();

/**
 * interface
 */
interface IAppProps {
  theme: Theme;
  uiReducer?: IUiState;
}

const RootNavigator: React.FC<IAppProps> = (props: IAppProps) => {
  const isDark = props?.uiReducer?.isDark;

  return (
    <NavigationContainer
      ref={Router.navigationRef}
      theme={isDark ? AppDarkTheme : AppLightTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name={Router.HomeView}
          component={HomeView}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name={Router.DetailView}
          component={DetailView}
          options={{
            header: () => null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state: AppState) => ({
  uiReducer: state.uiReducer,
});

export default connect(mapStateToProps, null)(withTheme(RootNavigator));
