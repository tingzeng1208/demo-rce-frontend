import { combineReducers} from 'redux';
import { todoReducers } from './todos';
import { FEMAApplication } from  '../actions';

export interface StoreState {
  todos: FEMAApplication[]
}

export const reducers = combineReducers<StoreState> (
  {todos: todoReducers}
  
);
