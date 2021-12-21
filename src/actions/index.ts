import axios from 'axios';
import {Dispatch} from 'redux';
import { ActionTypes } from './types';

const url = 'https://mockend.com/tingzeng1208/rce-mock-backend/posts';

export interface FEMAApplication {
  id: number;
  Address: string;
  State: string;
  email: string;
  ZIP: number;
  ApplicantName: string;
  status: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.fetchApplications;
  payload: FEMAApplication[];
}

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodos;
  payload: number;
}

export interface AddApplicationAction {
  type: ActionTypes.addOneApplications;
  payload: number;
}

export const fetchApplications = () => {
  return async (dispatch: Dispatch)=>{

      const response = await axios.get<FEMAApplication[]>(url, {
        params: {
          limit: 20
         }
      });
      dispatch<FetchTodosAction>({
        type: ActionTypes.fetchApplications,
        payload: response.data
      });
  };
};

export const deleteApplications = (id: number): DeleteTodoAction =>{
  return {
    type: ActionTypes.deleteTodos,
    payload: id
  };
}

export const addAApplication = (id: number): AddApplicationAction =>{
  return {
    type: ActionTypes.addOneApplications,
    payload: id
  };
}

export type Action = FetchTodosAction | DeleteTodoAction | AddApplicationAction;
export * from './types';