import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import ExtraSec1 from './Components/ExtraSec1/ExtraSec1';
import Service from './Components/Service/Service';
import Footer from './Components/Footer/Footer';
import ExtraSec2 from './Components/ExtraSec2/ExtraSec2';
import AuthProvider from './Components/Context/AuthProvider';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Login from './Components/Login/Login';
import Cart from './Components/Cart/Cart';
import Dashboard from './Components/Dashboard/Dashboard';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Error from './Components/Error/Error';


function App() {
  return (
    
      <AuthProvider>
        <Router>
          <Header></Header>
              <Switch>
                <Route exact path="/">
                  <Banner></Banner>
                  <ExtraSec1></ExtraSec1>
                  <Service></Service>
                  <ExtraSec2></ExtraSec2>
                </Route>
                <Route path="/home">
                  <Banner></Banner>
                  <ExtraSec1></ExtraSec1>
                  <Service></Service>
                  <ExtraSec2></ExtraSec2>
                </Route> 
                <Route path="/login">
                  <Login></Login>
                </Route>
                <PrivateRoute path="/services/:id">
                  <Cart></Cart>
                </PrivateRoute>
                <PrivateRoute path="/dashboard">
                 <Dashboard></Dashboard>
                </PrivateRoute>
                
              </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    
  );
}

export default App;
