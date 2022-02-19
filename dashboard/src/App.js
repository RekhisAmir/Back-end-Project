
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './App.css'
import Home from './pages/home/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Ganttchart from './pages/Ganttchart/Ganttchart';
import Dashboard from './components/dashboard/Dashboard'


function App() {
  return (
    <Router>
    <div className="App">
      {/* <Topbar/> */}
      <div className='container'> 
        
         <Switch>
           <Route exact path='/dashboard'>
             <Dashboard/>
           </Route>
           <Route exact path='/'>
           <Sidebar/>
         <Home />
             </Route>
             <Route exact path='/ganttchart'>
             <Sidebar/>
         <Ganttchart/>
             </Route> 
             </Switch>
             
      </div>
    </div>
    </Router>
  );
}

export default App;
