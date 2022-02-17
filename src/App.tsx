import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {StartingPage} from './pages/Starting';
import { Application } from './pages/Application';
import { TestPage } from './pages/TestPage';


export const App = ()=> {
  return (
    <Router>
    <StartingPage />
    <Routes>
        <Route path="/sample-application"  element={<Application />}>
        </Route>
    </Routes>
    </Router>
  );
}

export default App;