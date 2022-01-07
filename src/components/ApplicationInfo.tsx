import {FEMAApplication} from '../actions';

export interface ApplicationInfoInterface extends FEMAApplication  
{  
  delAction?: ()=>void;
  viewAction?: ()=>void;
  editAction?: ()=>void;
};

export const ApplicationInfo = ({id,
  Address,
  State,
  email,
  ZIP,
  ApplicantName,
  status, delAction, viewAction, editAction}:ApplicationInfoInterface)  =>  {
  return <table><tbody><tr role="contentinfo"><td>{ApplicantName} </td><td>{status? "Active": "Inactive"}</td><td>
  <button onClick={delAction}>Del</button>
  <button onClick={viewAction}>View</button>
  <button onClick={editAction}>Edit</button></td>
  </tr></tbody></table>;
};