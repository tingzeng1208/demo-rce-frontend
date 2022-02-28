import React from 'react';
import { connect} from 'react-redux';
import {FEMAApplication, fetchApplications,  deleteApplications, addAApplication, editAApplication } from '../actions';
import {StoreState } from '../reducers';
import CSS from 'csstype';
import { ApiSync } from '../API-service/ApiSync';
import { AxiosResponse } from 'axios';
import {ApplicationInfo} from '../components/ApplicationInfo/ApplicationInfo';
import { ApplicationList } from '../reducers/ApplicationList';
import { ViewBox} from '../components/ViewBox/ViewBox';
import { Formbox } from '../components/FormView/FormView';
import { EditForm } from '../components/EditBox/EditBox';
import { Button, TextInput, Checkbox, Header, Title, NavMenuButton, PrimaryNav, Search } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/uswds.css';
import '@trussworks/react-uswds/lib/index.css';
import { SideNav } from '../components/SideNav/SideNav'
import { Navbar } from 'react-bootstrap';
import { GridContainer } from '../components/grid/GridContainer/GridContainer';
import { Grid} from '../components/grid/Grid/Grid';

export const url:string = 'http://localhost:5001/applications';

export const leftGridSize = 5;
export const midGridSize = 1;
export const rightGridSize = 6;

const mockSubmit = ()=>{};

const div1style : CSS.Properties  = {
    width: '800px',
    display: 'inline-block',
    margin: '40px, 40px, 35px, 10px',
    height: 'auto'
};

const div2style : CSS.Properties  = {
  width: '1200px',
  display: 'inline-block',
  height: 'auto'
};

export interface AppProps {
  applications: FEMAApplication[];
  fetchApplications: Function;
  deleteApplications: typeof deleteApplications;
  addAApplication: typeof addAApplication;
  editAApplication: typeof editAApplication;
  urlString: string;
}

export class _App extends React.Component<AppProps>{ 
  

  state = {
    showingNew: false,
    showingDetail:false,
    showingEdit: false,
    appNameData: '',
    statusData: true,
    currentId: -1
  };

  public apiSync : ApiSync<FEMAApplication> = new ApiSync<FEMAApplication>(url);

 

  displayElements: JSX.Element[] = [];

  buttonClick= (): void => {
    this.props.fetchApplications(url);
  }

  newClick = (): void =>{

    const {showingNew: showingNew} = this.state;
    this.setState({ showingNew: !showingNew });
  }

  onDeleteClick = (id: number | undefined): void =>{

    if (!id) return;
    
    this.props.deleteApplications(id);
    this.apiSync.delete(id).then((response:AxiosResponse)=>{
      console.log(`successfully delete ${id}`);
      console.log(response);
    }).catch((event)=>{
      console.log(`error at deleting id: ${id}`);
      console.log(event);
    })
  }

  onViewClick= (id: number  | undefined): void =>{

    const {showingDetail: showingDetail} = this.state;
    this.setState({ showingDetail: !showingDetail, currentId: id });
  }

  onEditClick= (id: number  | undefined): void =>{

    const {showingEdit: showingEdit} = this.state;
    console.log(`current id = ${id}`);
    
    this.setState({ showingEdit: !showingEdit, currentId: id });
    const application= this.props.applications.find(a=>a.id === id);
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

  renderList(){
    if (this.props && this.props.applications){
     
      this.displayElements= this.props.applications.map((applications: FEMAApplication) =>
      {
        return <ApplicationInfo ApplicantName={applications.ApplicantName} 
        status={applications.status} 
        delAction={()=>this.onDeleteClick(applications.id)}
        viewAction={()=>this.onViewClick(applications.id)}
        editAction={()=>this.onEditClick(applications.id)}
        />;
      });
      if (this.displayElements.length>0){
      this.displayElements.unshift(
        <Grid row>
          <Grid col={leftGridSize}>Applicant Name:</Grid>
          <Grid col={midGridSize}>Status</Grid>
          <Grid col={rightGridSize}>Action</Grid>
        </Grid>);
      }
      return this.displayElements;
    }
    else{
      return [];
    }
    
  }

  renderView(): JSX.Element {
    if (!this.props || !this.props.applications){
      return <div></div>;
    }
    const application= this.props.applications.find(a=>a.id === this.state.currentId);
    if (application !== undefined){
      return <ViewBox id ={application.id} 
        ApplicantName={application.ApplicantName} 
        Address={application.Address}  
        email = {application.email}
        State={application.State}
        ZIP = {application.ZIP}
        status= {application.status}
      />;
    }
    else{
      return <div></div>;
    }
    
  }

  onNewSubmit = (e: React.FormEvent<HTMLFormElement>): void =>{
    e.preventDefault();
    const target = e.target as typeof e.target & {
      appName: { value: string };
      status: { checked: boolean };
    };
    
    console.log(e.target);
    const appName: string = target.appName.value; // typechecks!
    const status: boolean = target.status.checked// typechecks!  
    const application:FEMAApplication = 
    {   
      Address: '123 main st',
      State: 'virginia',
      email: 'test@test.com',
      ZIP: 22030,
      ApplicantName: appName,
      status: status
    };
    console.log(application);
    this.props.addAApplication(application);
    console.log(this.props.applications);
    this.apiSync.save(application).then((response: AxiosResponse): void =>{
        console.log(`save success for ${application} with response ${response.data}`);
        application.id = response.data.id;
    }).catch(()=>{
      console.log(`save error for application ${application}`);
    });
    this.displayElements.push(<tr><td>{application.ApplicantName}</td><td>{application.status? "Active": "Inactive"}</td><td><button onClick={()=>this.onDeleteClick(application.id)}>del</button><button onClick={()=>this.onViewClick(application.id)}>View</button></td> </tr>);
    
    this.newClick();
  };

  onEditSubmit = (e: React.FormEvent<HTMLFormElement>): void =>{
    
    e.preventDefault();
    console.log("Edit form object");
    console.log(e);
    const target = e.target as typeof e.target & {
      appName: { value: string };
      status: { checked: boolean };
    };
    
    console.log(e.target);
    const appName: string = target.appName.value; // typechecks!
    const status: boolean = target.status.checked// typechecks! 
    const application = this.props.applications.find(a=>a.id === this.state.currentId);
    if (application!== undefined){
      application.ApplicantName = appName;
      application.status = status;
      console.log(`edit application id: ${application.id}`);
      this.apiSync.save(application).then((response: AxiosResponse): void =>{
        console.log(`edit success for ${application} with response ${response.data}`);
        application.id = response.data.id;
    }).catch(()=>{
      console.log(`edit error for application ${application}`);
    });
    }    
    this.props.deleteApplications(-1);
    this.EditClick();
  }

  setStateFor = (application: FEMAApplication):void =>{
    this.setState({appNameData: application.ApplicantName});
    this.setState({statusData: application.status});
  }

  onStatusChange = (e: React.ChangeEvent<HTMLInputElement>)=>{

    console.log(`changed status to ${e.target.checked}`);
    this.setState({statusData: e.target.checked});

  }

  onAppNameChange = (e: React.ChangeEvent<HTMLInputElement>)=>{

    console.log(`changed app name to ${e.target.value}`);
    this.setState({appNameData: e.target.value});

  }
  
  renderEdit(): JSX.Element {
    if (!this.props || !this.props.applications){
      return <div></div>;
    }
    const application= this.props.applications.find(a=>a.id === this.state.currentId);
    console.log(`render edit for id = ${ this.state.currentId}`);
    console.log(application);
    
    if (application !== undefined){
      console.log(`state applicant name is ${this.state.appNameData} and status is ${this.state.statusData}`);
      return <div>
        <div>Application Information:</div>        
        
        <EditForm 
        ApplicantName={this.state.appNameData} 
        Address={application.Address}  
        email = {application.email}
        State={application.State}
        ZIP = {application.ZIP}
        status= {this.state.statusData}
        onSubmit={this.onEditSubmit} 
        children=''/>
        </div>
    }
    else{
      return <div></div>;
    }
    
  }
  
  render() {
      const {showingNew: showingNew} = this.state;
      const {showingDetail: showingDetail} = this.state;
      const {showingEdit: showingEdit} = this.state;

      const menuItems = [
        <a href="../"  key="Main">
          Main Page
        </a>,
        <a href="." key="Sample application" className="usa-current">
          Sample Application
        </a>,
        <a href="#three" key="three">
          Application two
        </a>,
      ];
      return <>
      <GridContainer>
      <Grid row>
      <Grid col={2}><SideNav items={menuItems}/></Grid>
      <Grid col={10}>
         <Header basic={true}>
        <div className="usa-nav-container" style={div2style}>
          <div className="usa-navbar">
            <Title>Sample Application</Title>
            <NavMenuButton label="Menu" />
          </div>
        
        </div>
      </Header>
      
        <table><tr>
          
        <td>
        <div style={div1style}>
        <button onClick={this.buttonClick}>Get list</button>&nbsp;&nbsp;<button onClick={this.newClick}>New</button>
      <div style={{ display: (showingNew ? 'block' : 'none') }}>
            
        <Formbox onSubmit={this.onNewSubmit} children=''/>
      </div>
      <div style={div1style}>
      {this.renderList()}
      </div>      
      </div>
      </td>
      <td style={{verticalAlign: 'top'}}>
      <div style={{ display: (showingDetail ? 'inline-block' : 'none'),  width: '160',
  height: 'auto',
  alignSelf: 'left', alignContent:'left'}}>{this.renderView()}</div>
  <div style={{ display: (showingEdit ? 'inline-block' : 'none'),  width: '200',
  height: 'auto',
  alignSelf: 'left', alignContent:'left'}}>{this.renderEdit()}</div>
  </td>  
  </tr></table>
  </Grid>
  </Grid>
  </GridContainer>
      </>
      ;
  }
}


const mapStateToProps = (state: StoreState) => {
  return {
    applications: state.applications
  };
}

const urlString = 'http:\\localhost:5001';
export const Application = connect(
  mapStateToProps, 
  {fetchApplications, deleteApplications, addAApplication, editAApplication, urlString},
)(_App);