import React, {PureComponent} from 'react';
import {
  Appbar,
  Button,
  Switch,
  Text,
  Theme,
  withTheme,
} from 'react-native-paper';
import {connect} from 'react-redux';
import {AnyAction} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import {Centre} from '../../components/centre';
import {Offline} from '../../components/offline';
import {AppState} from '../../redux/store';
import {changeTheme} from '../../redux/ui/uiAction';
import {Router} from '../../routes/router';

interface IHomeViewProps {
  theme: Theme;
  changeTheme: Function;
}

interface IHomeViewState {
  isSwitchOn: boolean;
}

class HomeView extends PureComponent<IHomeViewProps, IHomeViewState> {
  state: IHomeViewState = {
    isSwitchOn: false,
  };

  navigateToDetailView = () => {
    Router.navigate(Router.DetailView);
  };

  render() {
    const {isSwitchOn} = this.state;
    const {theme, changeTheme} = this.props;
    return (
      <>
        <Appbar.Header>
          <Appbar.Content title="Home" />
        </Appbar.Header>
        <Offline />
        <Centre>
          <Text>HomeView</Text>
          <Button
            onPress={this.navigateToDetailView}
            mode="contained"
            style={{width: 100}}>
            <Text>Detail</Text>
          </Button>
          <Text style={{color: theme.colors.text}}>Toggle theme</Text>
          <Switch
            value={isSwitchOn}
            onValueChange={() => {
              this.setState({isSwitchOn: !isSwitchOn});
              changeTheme();
            }}
          />
        </Centre>
      </>
    );
  }
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, {}, AnyAction>,
) => ({
  changeTheme: () => dispatch(changeTheme()),
});

export default connect(null, mapDispatchToProps)(withTheme(HomeView));
