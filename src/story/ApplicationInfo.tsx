import {FEMAApplication} from '../actions';
import { Button } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/uswds.css';
import '@trussworks/react-uswds/lib/index.css';

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
  <Button type="button" size='small' onClick={delAction}>Del</Button>
  <Button type="button" size='small' onClick={viewAction}>View</Button>
  <Button type="button" size='small' onClick={editAction}>Edit</Button></td>
  </tr></tbody></table>;
};