import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
} from 'react';
import WebSocketAPI from '../api/websocket';
import {
  activityReducer,
  initialState,
  State,
  Action,
} from './activityReducer';

interface ActivityProviderProps {
  children: ReactNode;
}

interface ActivityContextValue {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const ActivityContext = createContext<ActivityContextValue | undefined>(undefined);

export function ActivityProvider({ children }: ActivityProviderProps) {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  useEffect(() => {
    const api = new WebSocketAPI();
    
    const handleActivity = (activity: any) => {
      dispatch({ type: 'ADD_ACTIVITY', payload: activity });
    };
    
    api.subscribe(handleActivity);
    
    return () => {
      api.unsubscribe();
      api.disconnect();
    };
  }, []);

  const value: ActivityContextValue = { state, dispatch };

  return (
    <ActivityContext.Provider value={value}>
      {children}
    </ActivityContext.Provider>
  );
}
export function useActivityContext(): ActivityContextValue {
  const context = useContext(ActivityContext);
  
  if (!context) {
    throw new Error(
      'useActivityContext must be used within an <ActivityProvider />. ' +
      'Make sure to wrap your component with <ActivityProvider>.'
    );
  }
  
  return context;
}