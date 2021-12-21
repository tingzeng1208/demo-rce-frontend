import React, { CSSProperties } from 'react';
import { connect} from 'react-redux';
import {FEMAApplication, fetchApplications,  deleteApplications, addAApplication } from '../actions';
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

const cellStyle : CSSProperties = {
  verticalAlign: 'top'
}


interface AppProps {
  todos: FEMAApplication[];
  fetchTodos: Function;
  deleteTodos: typeof deleteApplications;
}

class _App extends React.Component<AppProps>{

  state = {
    showingNew: false,
    showingDetail:false,
    showingEdit: false,
    appNameData: '',
    statusData: true,
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

  onEditClick= (id: number): void =>{

    const {showingEdit: showingEdit} = this.state;
    console.log(`current id = ${id}`);

    this.setState({ showingEdit: !showingEdit, currentId: id });
    const application= this.props.todos.find(a=>a.id === id);
    console.log('onEditClick');
    console.log(application);
    if (application !== undefined){
      this.setStateFor(application);
    }
  }

  EditClick = () : void => {
    const {showingEdit: showingEdit} = this.state;
    this.setState({ showingEdit: !showingEdit});
  }

  renderList(): JSX.Element[] {
    // console.log('render now');
    this.displayElements= this.props.todos.map((todos: FEMAApplication) =>

    {
      return <tr><td>{todos.ApplicantName} </td><td>{todos.status? "Active": "Inactive"}</td><td>
        <button onClick={()=>this.onDeleteClick(todos.id)}>del</button>
        <button onClick={()=>this.onViewClick(todos.id)}>View</button>
        <button onClick={()=>this.onEditClick(todos.id)}>Edit</button></td>
        </tr>;
    });
    return this.displayElements;
  }

  renderView(): JSX.Element {
    console.log(`render view for id = ${ this.state.currentId}`);
    const application= this.props.todos.find(a=>a.id === this.state.currentId);
    if (application !== undefined){
      return <div>
        <div>Details:</div>
        <div>Id: &nbsp;{application.id}</div>
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

  setStateFor = (application: FEMAApplication):void =>{
    this.setState({appNameData: application.ApplicantName});
    this.setState({statusData: application.status});
  }
  renderEdit(): JSX.Element {
    
    const application= this.props.todos.find(a=>a.id === this.state.currentId);
    console.log(`render edit for id = ${ this.state.currentId}`);
    console.log(application);
    
    if (application !== undefined){
      return <div>
        <div>Application Information:</div>
        <form onSubmit={(e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
          appName: { value: string };
          status: { checked: boolean };
        };
        
        console.log(e.target);
        const appName: string = target.appName.value; // typechecks!
        const status: boolean = target.status.checked// typechecks! 
        const newId: number = Math.floor(Math.random() * 9000)+1000;   
        const application = this.props.todos.find(a=>a.id === this.state.currentId);
        if (application!== undefined){
          application.ApplicantName = appName;
          application.status = status;
        }
        
        this.props.deleteTodos(-1);
        this.EditClick();
      }}>
        <div>Id: &nbsp;{application.id}</div>
        <div>Applicant Name: &nbsp;<input type='text' name='appName' value={this.state.appNameData} onChange={(e) => this.setState({appNameData: e.target.value})}></input></div>
        <div>Application Status: &nbsp;<input type='checkbox' checked={this.state.statusData} name='status'  onChange={(e) => this.setState({statusData: e.target.value})}></input></div>
        <div><button type='submit'>Submit</button></div>
        </form>
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
      const {showingEdit: showingEdit} = this.state;
      return <div>
        <table><tr><td>
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
      </td>
      <td style={{verticalAlign: 'top'}}>
      <div style={{ display: (showingDetail ? 'inline-block' : 'none'),  width: '200',
  height: 'auto',
  alignSelf: 'flex-end'}}>{this.renderView()}</div>
  <div style={{ display: (showingEdit ? 'inline-block' : 'none'),  width: '200',
  height: 'auto',
  alignSelf: 'flex-end'}}>{this.renderEdit()}</div>
  </td>
  
  </tr></table>
      </div>
      ;
  }
}


const mapStateToProps = (state: StoreState) => {
  return {todos: state.todos};
}

export const App = connect(
  mapStateToProps, 
  {fetchTodos: fetchApplications, deleteTodos: deleteApplications}
)(_App);