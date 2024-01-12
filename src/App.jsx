// App.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import CustomNavbar from './components/Navbar';
import HomeComponent from './components/Home';

export const App = () => {
    return (
            <div>
                <CustomNavbar />
                <Switch>
                <Route exact path="/" component={HomeComponent} />
                <Route path="/About" component={HomeComponent} />
                <Route path="/Contact" component={HomeComponent} />
                <Route path="/Services" component={HomeComponent} />
                    {/* Add other routes here */}
                </Switch>
            </div>
    );
}

export default App;
