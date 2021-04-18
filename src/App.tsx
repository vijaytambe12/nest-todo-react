import React from 'react';
import './App.css';
import store from "./store/StoreState";
import {Provider} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";


function App() {

  return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route exact={true} path="/" component={Home}/>
              <Route exact={true} path="/login" component={Login}/>
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
  );
}

export default App;
