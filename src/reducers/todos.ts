
import { FEMAApplication, FetchTodosAction, Action } from '../actions/index';
import { ActionTypes } from '../actions/types';

export const todoReducers = (state: FEMAApplication[] = [], action: Action) => {

  switch (action.type){
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodos:
      if (action.payload===-1){
        return state.filter((todo: FEMAApplication) => todo.id !== action.payload || todo.id === action.payload);
      }
      else{
      return state.filter((todo: FEMAApplication) => todo.id !== action.payload);
      }
      
    default:
      return state;
  }
};