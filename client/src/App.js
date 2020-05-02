import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import { Header } from './components/index';
import Home from './pages/Home'
import {  Chat,Login } from './pages/index';

import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./Stores/store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <Router>
        <div>
          <Route exact path='/' component={Login}></Route>
          <Route exact path='/chat' component={Chat}></Route>
        </div>
      </Router>
    </ReduxProvider>
  );
}

export default App;
