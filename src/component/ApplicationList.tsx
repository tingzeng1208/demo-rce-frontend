import {ApplicationInfo, ApplicationInfoInterface} from '../story/ApplicationInfo';

export const ApplicationList = (applications: ApplicationInfoInterface[]): JSX.Element[] =>{
  return applications.map((application:ApplicationInfoInterface)=>
  {
    return <ApplicationInfo ApplicantName={application.ApplicantName} 
    status={application.status} 
    delAction={application.delAction}
    viewAction={application.viewAction}
    editAction={application.editAction} />
  });
}