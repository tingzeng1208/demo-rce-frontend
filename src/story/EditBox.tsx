import {FEMAApplication} from '../actions';
import { Button, GridContainer, Grid, TextInput, Checkbox } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/uswds.css';
import '@trussworks/react-uswds/lib/index.css';
import CSS from 'csstype';
import React, { useState } from 'react';

const div1style : CSS.Properties  = {
  width: '600',
  display: 'inline-block',
  marginTop: '5px',
  height: 'auto'
};

const textInputstyle : CSS.Properties  = {
  width: '250px',
  display: 'inline-block',
  marginTop: '3px',
  height: '20px'
};

const testContent = 'content';

const leftGridSize = 8;

const rightGridSize = 4;

export type OptionalFormProps = JSX.IntrinsicElements['form'];

interface RequiredFormProps {
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onStatusChange: (event: React.ChangeEvent<HTMLInputElement>)=>void;
  onAppNameChange: (event: React.ChangeEvent<HTMLInputElement>)=>void;
}

type FormProps = FEMAApplication & RequiredFormProps & OptionalFormProps

export const EditForm: React.FunctionComponent<FormProps> = ({id: number,
  Address,
  State,
  email,
  ZIP,
  ApplicantName,
  status, onSubmit,...formProps}: FormProps ): React.ReactElement=>{
    const [appName, setAppName] = useState(ApplicantName);
    const [statusData, setStatusData] = useState(status);
  return <div style={div1style}>
<form onSubmit={onSubmit}>
  <GridContainer containerSize="mobile">
    {/* <Grid row>
      <Grid col={leftGridSize}>Id: </Grid>
      <Grid col={rightGridSize}></Grid>
    </Grid> */}
    <Grid row>
      <Grid col={leftGridSize}>Applicant Name:</Grid>
      {/* <Grid col={rightGridSize}><input type='text' name='appName'></input></Grid> */}
      <Grid col={rightGridSize}><TextInput style={textInputstyle} id='appName' value={appName} onChange={(e)=>setAppName(e.target.value)} type='text' name='appName' placeholder='Applicant name' autoCapitalize='off' autoCorrect='off'/></Grid>
    </Grid>
    <Grid row>
      <Grid col={leftGridSize}>Status:</Grid>
      <Grid col={rightGridSize}><Checkbox id="status" checked={statusData} onChange={(e)=>setStatusData(e.target.checked)} name="status" label='' title='abc'/></Grid>
    </Grid>
    <Grid row>
      <Grid col={12}><Button type='submit'>Submit</Button></Grid>
    </Grid>
    {/* <Grid row>
      <Grid col={leftGridSize}>Address:</Grid>
      <Grid col={rightGridSize}>{Address}</Grid>
    </Grid>
    <Grid row>
      <Grid col={leftGridSize}>Email:</Grid>
      <Grid col={rightGridSize}>{email}</Grid>
    </Grid>
    <Grid row>
      <Grid col={leftGridSize}>State:</Grid>
      <Grid col={rightGridSize}>{State}</Grid>
    </Grid>
    <Grid row>
      <Grid col={leftGridSize}>Zip:</Grid>
      <Grid col={rightGridSize}>{ZIP}</Grid>
    </Grid> */}
  </GridContainer>
  </form>
  </div>;
        // <div>
        //   <div>Details:</div>
        //   <div>Id: &nbsp;{id}</div>
        //   <div>Applicant Name: &nbsp;{ApplicantName}</div>
        //   <div>Application Status: &nbsp;{status? 'Active' : 'Inactive'}</div>
        //   <div>Address: &nbsp;{Address}</div>
        //   <div>Email: &nbsp;{email}</div>
        //   <div>State: &nbsp;{State}</div>
        //   <div>Zip: &nbsp;{ZIP}</div>
        // </div>
}