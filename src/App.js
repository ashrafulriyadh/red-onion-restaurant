import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Breakfast from '../src/Pages/Breakfast/Breakfast'
import Home from './Pages/Home/Home';
import Lunch from './Pages/Lunch/Lunch';
import Dinner from './Pages/Dinner/Dinner';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import FoodNav from './Pages/FoodNav/FoodNav';
import AuthProvider from '../src/context/AuthProvider';


function App() {
  return (
   <AuthProvider>
      <Router>
      <Header></Header>
      <Switch>
      <Route exact path="/">
      <Home></Home>
        <FoodNav></FoodNav>
          <Breakfast></Breakfast>
        </Route>
        <Route path="/home">
        <Home></Home>
        <FoodNav></FoodNav>
          <Breakfast></Breakfast>
        </Route>
        <Route exact path="/breakfast">
        <Home></Home>
        <FoodNav></FoodNav>
          <Breakfast></Breakfast>
        </Route>
        <Route exact path="/lunch">
        <Home></Home>
        <FoodNav></FoodNav>
          <Lunch></Lunch>
        </Route>
        <Route exact path="/dinner">
        <Home></Home>
        <FoodNav></FoodNav>
          <Dinner></Dinner>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
   </AuthProvider>
  );
}

export default App;
