import React, {useState} from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Results from './pages/Results';
import Speakings from './pages/Speakings';
import Sidebar from './components/Sidebar';
import SpeakingList from './pages/SpeakingList';

function App() {
  const [sidebar, setSidebar] = useState(false);


  const showSidebar = () => {
      setSidebar(!sidebar)
  }
  return (
    <>
      <Router>
        <div className='App'>
          <Sidebar
          sidebar={sidebar}
          showSidebar={showSidebar}
          />
          <div className={sidebar ? 'wide-content content' : 'content'}>
            <Navbar />
            <Switch>
              <Route path='/' exact component={Dashboard} />
              <Route path='/results' component={Results} />
              <Route path='/speakings' component={Speakings} />
              <Route path='/speakinglist/:title' component={SpeakingList} />
            </Switch>
            <Footer />
          </div>
        </div>

      </Router>
    </>
  );
}


export default App;
