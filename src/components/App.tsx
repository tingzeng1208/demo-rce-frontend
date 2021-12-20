import React from 'react';
import { connect} from 'react-redux';
import {FEMAApplication, fetchTodos, deleteTodos, addAApplication } from '../actions';
import {StoreState } from '../reducers';


interface AppProps {
  todos: FEMAApplication[];
  fetchTodos: Function;
  deleteTodos: typeof deleteTodos;
}

class _App extends React.Component<AppProps>{

  state = {showing: false};
  displayElements: JSX.Element[] = [];

  buttonClick= (): void => {
    this.props.fetchTodos();
  }

  newClick = (): void =>{

    const {showing} = this.state;
    this.setState({ showing: !showing });
  }

  onDeleteClick = (id: number): void =>{

    this.props.deleteTodos(id);
  }

  onViewClick= (id: number): void =>{

    this.props.deleteTodos(id);
  }

  renderList(): JSX.Element[] {
    console.log('render now');
    this.displayElements= this.props.todos.map((todos: FEMAApplication) =>

    {
      return <tr><td>{todos.ApplicantName} </td><td>{todos.status? "Active": "Inactive"}</td><td><button onClick={()=>this.onDeleteClick(todos.id)}>del</button></td> </tr>;
    });
    return this.displayElements;
  }
  
  render() {
      console.log(this.props.todos);
      const {showing} = this.state;
      return <div><button onClick={this.buttonClick}>Get list</button>&nbsp;&nbsp;<button onClick={this.newClick}>New</button>
      <div style={{ display: (showing ? 'block' : 'none') }}>
            <form  onSubmit={(e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
          appName: { value: string };
          status: { checked: boolean };
        };
        
        console.log(e.target);
        const appName: string = target.appName.value; // typechecks!
        const status: boolean = target.status.checked// typechecks!     
        const application:FEMAApplication = 
        {   id: 12345,
          Address: '123 main st',
          State: 'virginia',
          email: 'test@test.com',
          zip: 22030,
          ApplicantName: appName,
          status: status
        };
        console.log(application);
        this.props.todos.unshift(application);
        console.log(this.props.todos);
        this.displayElements.push(<tr><td>{application.ApplicantName} </td><td>{application.status? "Active": "Inactive"}</td><td><button onClick={()=>this.onDeleteClick(application.id)}>del</button><button onClick={()=>this.onViewClick(application.id)}>View</button></td> </tr>);
        this.props.deleteTodos(-1);
        this.newClick();
      }}> 
        <table>
          <tr><td>Applicant name</td><td><input type='text' name='appName'></input></td></tr>
          <tr><td>Status</td><td><input type='checkbox' name='status'></input></td></tr>
          <tr><td><button type='submit'>Submit</button></td></tr>
        </table>
        </form>
      </div>
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