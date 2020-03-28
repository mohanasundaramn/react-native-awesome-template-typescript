import {IPostStoreModel} from '../../models/postStoreModels';
import {ELoadingEvents} from '../ui/uiEvents';
import {IPostsActionTypes} from './postAction';
import {EPostEvents} from './postEvents';

/**
 * Initial state on Post Reducer
 */
const initialState: IPostStoreModel = {
  loading: false,
  posts: null,
};

export const postReducer = (
  state = initialState,
  action: IPostsActionTypes,
) => {
  switch (action.type) {
    case ELoadingEvents.LOADING:
      return {
        ...state,
        loading: true,
      };
    case ELoadingEvents.LOADED:
      return {
        ...state,
        loading: false,
      };
    case EPostEvents.GET_POSTS:
      return {
        ...state,
        posts: action.posts,
      };
    default:
      return state;
  }
};
