import {IUiState} from '../../models/uiStoreModel';
import {IUiActionTypes} from './uiAction';
import {EToggleThemeEvents} from './uiEvents';

/**
 * Initial state of UI reducer
 */
const initialState: IUiState = {
  isDark: false,
};

export const uiReducer = (state = initialState, action: IUiActionTypes) => {
  switch (action.type) {
    case EToggleThemeEvents.TOGGLE_THEME:
      return {
        ...state,
        isDark: !state.isDark,
      };
    default:
      return state;
  }
};
