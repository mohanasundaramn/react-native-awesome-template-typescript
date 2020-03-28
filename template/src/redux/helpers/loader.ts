import {ELoadingEvents} from '../ui/uiEvents';

// Helper function to dispatch Loading state
export const loadingHandler = () => ({
  type: ELoadingEvents.LOADING,
});

// Helper function to dispatch Loaded state
export const loadedHandler = () => ({
  type: ELoadingEvents.LOADED,
});
