import { combineReducers} from 'redux';
import { todoReducers } from './todos';
import { Todo } from  '../actions';

export interface StoreState {
  todos: Todo[]
}

export const reducers = combineReducers<StoreState> (
  {todos: todoReducers}
  
);

// export const reducers = combineReducers (
//   {
//     counter: ()=> 1
//   }
// );

// {
//   todos: [Todo, Todo, Todo]
// }