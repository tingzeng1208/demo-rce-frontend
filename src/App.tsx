import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {StartingPage} from './pages/Starting';
import {TopHeader} from './pages/TopHeader';
import { Application } from './pages/Application';


export const App = ()=> {
  return (
    <Router>
    <TopHeader />
    <Routes>
        <Route path="/"  element={<StartingPage />} />
        <Route path="/sample-application"  element={<Application />} />
    </Routes>
    </Router>
  );
}

export default App;