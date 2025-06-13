import { Activity } from '../types/activity';

export interface State {
  activities: Activity[];
}

export type Action = 
  | { type: 'ADD_ACTIVITY'; payload: Activity }
  | { type: 'RESET'; }

export const initialState: State = { activities: [] };

export function activityReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_ACTIVITY':
      return { activities: [action.payload, ...state.activities] };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}
