import React from 'react';
import { useAuth0 } from './react-auth0-spa';
import './App.css';
// import NavBar from './component/NavBar'
import history from "./utils/history"
import { Router } from 'react-router-dom'
import Routes from "./Routes"

function App() {
  
    const { loading } = useAuth0();

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="App">
        {/* <header> */}
          <Router history={history}>
            <Routes />
          </Router>
        {/* </header>   */}
      </div>
    );
  
}

export default App;
