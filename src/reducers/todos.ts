
import { FEMAApplication, FetchTodosAction } from '../actions/index';
import { ActionTypes } from '../actions/types';
import { Action } from '../actions/application';

export const todoReducers = (state: FEMAApplication[] = [], action: Action) => {

  switch (action.type){
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodos:
      return state.filter((todo: FEMAApplication) => todo.id !== action.payload);
    default:
      return state;
  }
};