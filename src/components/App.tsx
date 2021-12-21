import React, { CSSProperties } from 'react';
import { connect} from 'react-redux';
import {FEMAApplication, fetchTodos, deleteTodos, addAApplication } from '../actions';
import {StoreState } from '../reducers';
import CSS from 'csstype';


const div1style : CSS.Properties  = {
    width: '600',
    display: 'inline-block',
    height: 'auto'
};

const div2Style: CSSProperties = {
  width: '200',
  height: 'auto',
  alignSelf: 'flex-end',
  display: 'inline-block'
  
};


interface AppProps {
  todos: FEMAApplication[];
  fetchTodos: Function;
  deleteTodos: typeof deleteTodos;
}

class _App extends React.Component<AppProps>{

  state = {
    showingNew: false,
    showingDetail:false,
    currentId: -1
  };
  displayElements: JSX.Element[] = [];

  buttonClick= (): void => {
    this.props.fetchTodos();
  }

  newClick = (): void =>{

    const {showingNew: showingNew} = this.state;
    this.setState({ showingNew: !showingNew });
  }

  onDeleteClick = (id: number): void =>{

    this.props.deleteTodos(id);
  }

  onViewClick= (id: number): void =>{

    const {showingDetail: showingDetail} = this.state;
    this.setState({ showingDetail: !showingDetail, currentId: id });
  }

  renderList(): JSX.Element[] {
    console.log('render now');
    this.displayElements= this.props.todos.map((todos: FEMAApplication) =>

    {
      return <tr><td>{todos.ApplicantName} </td><td>{todos.status? "Active": "Inactive"}</td><td>
        <button onClick={()=>this.onDeleteClick(todos.id)}>del</button>
        <button onClick={()=>this.onViewClick(todos.id)}>View</button></td></tr>;
    });
    return this.displayElements;
  }

  renderView(): JSX.Element {
    const application= this.props.todos.find(a=>a.id === this.state.currentId);
    if (application !== undefined){
      return <div>
        <div>Details:</div>
        <div>Applicant Name: &nbsp;{application.ApplicantName}</div>
        <div>Application Status: &nbsp;{application.status? 'Active' : 'Inactive'}</div>
        <div>Address: &nbsp;{application.Address}</div>
        <div>Email: &nbsp;{application.email}</div>
        <div>State: &nbsp;{application.State}</div>
        <div>Zip: &nbsp;{application.ZIP}</div>
        </div>
    }
    else{
      return <div></div>;
    }
    
  }
  
  render() {
      console.log(this.props.todos);
      const {showingNew: showingNew} = this.state;
      const {showingDetail: showingDetail} = this.state;
      return <div>
        <div style={div1style}>
        <button onClick={this.buttonClick}>Get list</button>&nbsp;&nbsp;<button onClick={this.newClick}>New</button>
      <div style={{ display: (showingNew ? 'block' : 'none') }}>
            <form  onSubmit={(e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
          appName: { value: string };
          status: { checked: boolean };
        };
        
        console.log(e.target);
        const appName: string = target.appName.value; // typechecks!
        const status: boolean = target.status.checked// typechecks! 
        const newId: number = Math.floor(Math.random() * 9000)+1000;   
        const application:FEMAApplication = 
        {   id: newId,
          Address: '123 main st',
          State: 'virginia',
          email: 'test@test.com',
          ZIP: 22030,
          ApplicantName: appName,
          status: status
        };
        console.log(application);
        this.props.todos.unshift(application);
        console.log(this.props.todos);
        this.displayElements.push(<tr><td>{application.ApplicantName}</td><td>{application.status? "Active": "Inactive"}</td><td><button onClick={()=>this.onDeleteClick(application.id)}>del</button><button onClick={()=>this.onViewClick(application.id)}>View</button></td> </tr>);
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
      <div style={{ display: (showingDetail ? 'inline-block' : 'none'),  width: '200',
  height: 'auto',
  alignSelf: 'flex-end'}}>{this.renderView()}</div>
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