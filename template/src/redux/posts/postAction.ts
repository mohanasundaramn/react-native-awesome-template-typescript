import {Either} from 'fp-ts/lib/Either';
import {Dispatch} from 'react';
import {Action, AnyAction} from 'redux';
import {IFailure} from '../../models/failure';
import {IPosts} from '../../models/postModel';
import * as postService from '../../services/postService';
import {loadedHandler, loadingHandler} from '../helpers/loader';
import {ILoadedAction, ILoadingAction} from '../ui/uiAction';
import {EPostEvents} from './postEvents';

/**
 * Post Action Interfaces
 */
export interface IGetPostAction extends Action {
  type: EPostEvents.GET_POSTS;
  posts: IPosts[];
}

/**
 * Redux Action type
 */
export type IPostsActionTypes = IGetPostAction | ILoadingAction | ILoadedAction;

/**
 * Actions
 */
export const getPost = () => async (dispatch: Dispatch<AnyAction>) => {
  dispatch(loadingHandler());
  const response: Either<IFailure, IPosts[]> = await postService.getPost();
  dispatch({
    type: EPostEvents.GET_POSTS,
    posts: response,
  });
  dispatch(loadedHandler());
};
