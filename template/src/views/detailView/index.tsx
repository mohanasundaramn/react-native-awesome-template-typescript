import React, {PureComponent} from 'react';
import {Appbar, Text} from 'react-native-paper';
import {connect} from 'react-redux';
import {AnyAction} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import {Centre} from '../../components/centre';
import {Loader} from '../../components/loader';
import {Offline} from '../../components/offline';
import {IPostStoreModel} from '../../models/postStoreModels';
import {getPost} from '../../redux/posts/postAction';
import {AppState} from '../../redux/store';
import {Router} from '../../routes/router';
import {PostList} from './components/postList';

/**
 * interface
 */
interface IProps {
  getPost: Function;
  postReducer: IPostStoreModel;
}
interface IState {}

class DetailView extends PureComponent<IProps, IState> {
  componentDidMount() {
    const {getPost} = this.props;
    getPost();
  }

  handlePosts = () => {
    const {postReducer} = this.props;
    const {posts} = postReducer;
    if (posts?._tag === 'Left') {
      return (
        <Centre>
          <Text>{posts.left.message}</Text>
        </Centre>
      );
    }
    if (posts?._tag === 'Right') return <PostList posts={posts.right} />;
  };

  render() {
    const {postReducer} = this.props;
    const {loading} = postReducer;
    return (
      <>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => Router.goBack()} />
          <Appbar.Content title="Posts" />
        </Appbar.Header>
        <Offline />
        {loading ? <Loader /> : this.handlePosts()}
      </>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  postReducer: state.postReducer,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, {}, AnyAction>,
) => ({
  getPost: () => dispatch(getPost()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailView);
