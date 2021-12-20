// import { Todo, FetchTodosAction } from '../actions'
// import { ActionTypes } from '../actions/types';

// combine the import because actionTypes index.ts has all
import { Todo, FetchTodosAction,ActionTypes, Action } from '../actions'

// combine Action Type for union type from FetchTodosAction and DeleteTodosAction to Action union type
// export const todoReducers = (state: Todo[] = [], action: FetchTodosAction) => {
export const todoReducers = (state: Todo[] = [], action: Action) => {

  switch (action.type){
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodos:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    default:
      return state;
  }
};