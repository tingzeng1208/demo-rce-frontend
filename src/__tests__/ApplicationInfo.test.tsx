import { ApplicationInfo, ApplicationInfoInterface } from "../components/ApplicationInfo";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'


const applications: ApplicationInfoInterface = {
  "Address": "YL40B8Ngz2",
"ApplicantName": "DWrXltczwi-123",
"State": "BXSYxysDG9",
"ZIP": 43229,
"email": "lsjfbx@effrs.wx",
"id": 3,
"status": true
};

const renderAnApplication = (application: ApplicationInfoInterface): ReactResult =>{
  render(<ApplicationInfo ApplicantName={application.ApplicantName} 
    status={application.status} 
    delAction={()=>console.log(application.id)}
    viewAction={()=>console.log(application.id)}
    editAction={()=>console.log(application.id)} />);
}

test("Render ApplicationInfo correctly", ()=>{

    render(<ApplicationInfo ApplicantName={applications.ApplicantName} 
      status={applications.status} 
      delAction={()=>console.log(applications.id)}
      viewAction={()=>console.log(applications.id)}
      editAction={()=>console.log(applications.id)} />);
    
    const rendered = screen.getByRole("contentinfo");
    expect(rendered).toBeInTheDocument();
});

describe("test ApplicationInfo", ()=>{
  it("Render ApplicationInfo with Delete buttons", ()=>{
    renderAnApplication(applications);
    const delButton = screen.getByText("Del");
    expect(delButton).toBeInTheDocument();

  });

  it("Render ApplicationInfo with Edit buttons", ()=>{
    renderAnApplication(applications);

    const editButton = screen.getByText("Edit");
    expect(editButton).toBeInTheDocument();

  });
})