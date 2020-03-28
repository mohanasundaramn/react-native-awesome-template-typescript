import {Dispatch} from 'react';
import {Action, AnyAction} from 'redux';
import {ELoadingEvents, EToggleThemeEvents} from './uiEvents';

/**
 *  Action Interfaces
 */
export interface IToggleAction extends Action {
  type: EToggleThemeEvents.TOGGLE_THEME;
}
export interface ILoadingAction extends Action {
  type: ELoadingEvents.LOADING;
}
export interface ILoadedAction extends Action {
  type: ELoadingEvents.LOADED;
}

/**
 * Redux Action type
 */
export type IUiActionTypes = IToggleAction;

/**
 * Actions
 */
export const changeTheme = () => async (dispatch: Dispatch<AnyAction>) => {
  dispatch({
    type: EToggleThemeEvents.TOGGLE_THEME,
  });
};
