import axios from 'axios';
import {Dispatch} from 'redux';
import {ActionTypes} from './types';

const url = 'https://mockend.com/tingzeng1208/rce-mock-backend/posts';

export interface FEMAApplication {
  id: number;
  Address: string;
  State: string;
  email: string;
  zip: number;
  ApplicantName: string;
  status: boolean;
}

export interface FetchApplicationAction {
  type: ActionTypes.fetchTodos;
  payload: FEMAApplication[];
}

export interface DeleteApplicationAction {
  type: ActionTypes.deleteTodos;
  payload: number;
}

export const fetchApplications = () => {
  return async (dispatch: Dispatch)=>{

      const response = await axios.get<FEMAApplication[]>(url);
      dispatch<FetchApplicationAction>({
        type: ActionTypes.fetchTodos,
        payload: response.data
      });
  };
};

export const deleteApplications = (id: number): DeleteApplicationAction =>{
  return {
    type: ActionTypes.deleteTodos,
    payload: id
  };
}


export type Action = FetchApplicationAction | DeleteApplicationAction;