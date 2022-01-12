import axios, {AxiosResponse, AxiosPromise} from 'axios';

export const url = 'http://localhost:5001/applications';

interface HasId {
  id?: number;
}

export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {
  }

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  delete(id: number): AxiosPromise {
    return axios.delete(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  }

  // save(data: T): AxiosPromise {
  //   const { id } = data;

    
  //   return axios.post(this.rootUrl, data);
  // }

  // edit(data: T): AxiosPromise {

  //   const { id } = data;
  //   return axios.put(`${this.rootUrl}/${id}`, data); 
    
    
  // }
}