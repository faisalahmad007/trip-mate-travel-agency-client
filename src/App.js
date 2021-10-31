import './App.css';
import Home from './Pages/Home/Home';
import AuthProvider from './Pages/contexts/AuthProvider';
import { Route,BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './Pages/Header/Header';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Footer/Footer';
import OurServices from './Pages/OurServices/OurServices';
import Booking from './Pages/Booking/Booking';
import AddService from './Pages/AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';
import UpdateServices from './Pages/UpdateServices/UpdateServices';
import Register from './Pages/Register/Register';
import AboutUs from './Pages/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
     <AuthProvider>
      <Router>
        <Header></Header>
         <Switch>
            <Route exact path="/">
              <Home></Home>

            </Route>
            <Route exact path="/home">
              <Home></Home>

            </Route>
            <Route exact path="/services">
                <OurServices></OurServices>
            </Route>
            <Route exact path="/aboutus">
               <AboutUs></AboutUs>
            </Route>
            
            <PrivateRoute exact path="/booking/:serviceId">
            <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute exact path="/manageservices">
            <ManageServices></ManageServices>
            </PrivateRoute>
            <PrivateRoute exact path="/addservice">
            <AddService></AddService>
            </PrivateRoute>
            
            
            <Route exact path="/login">
              <Login></Login>

            </Route>
            <Route exact path="/register">
             <Register></Register>

            </Route>
            <Route exact path="/update/:serviceId">
              
                <UpdateServices></UpdateServices>
            </Route>

            <Route exact path="*">
             <NotFound></NotFound>
              </Route> 
         </Switch>
         <Footer></Footer>
      </Router>
      </AuthProvider>
   
    </div>
  );
}

export default App;
