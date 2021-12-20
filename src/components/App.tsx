import React from 'react';
import { connect} from 'react-redux';
import {FEMAApplication, fetchTodos, deleteTodos } from '../actions';
import {StoreState } from '../reducers';


interface AppProps {
  todos: FEMAApplication[];
  fetchTodos: Function;
  deleteTodos: typeof deleteTodos;
}

class _App extends React.Component<AppProps>{

  buttonClick= (): void => {
    this.props.fetchTodos();
  }

  onDeleteClick = (id: number): void =>{

    this.props.deleteTodos(id);
  }

  renderList(): JSX.Element[] {
    return this.props.todos.map((todos: FEMAApplication) =>

    {
      return <tr><td>{todos.ApplicantName} </td><td>{todos.status? "Active": "Inactive"}</td><td><button onClick={()=>this.onDeleteClick(todos.id)}>del</button></td> </tr>;
    });
  }
  
  render() {
      console.log(this.props.todos);
      return <div><button onClick={this.buttonClick}>Get list</button>
      <table>
        <tr><td>Applicant Name</td><td>Status</td><td>Action</td></tr>
      {this.renderList()}
      </table>
      </div>
      ;
  }
}


const mapStateToProps = (state: StoreState) => {
  return {todos: state.todos};
}

export const App = connect(
  mapStateToProps, 
  {fetchTodos, deleteTodos}
)(_App);