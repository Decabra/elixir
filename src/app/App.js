import './App.scss';
import Home from "./frontend/Home/Home";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./frontend/Login/Login";
import Register from "./frontend/Register/Register";
import Products from "./frontend/Products/Products";
import ContactUs from "./frontend/ContactUs/ContactUs";
import RequestNewTemplate from "./frontend/RequestNewTemplate/RequestNewTemplate";
import Cart from "./frontend/Cart/Cart";
import Checkout from "./frontend/Checkout/Checkout";

function App() {
  return (
      <Router>
        <div className="App">
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/products" exact component={Products}/>
                <Route path="/contact" exact component={ContactUs}/>
                <Route path="/request_template" exact component={RequestNewTemplate}/>
                <Route path="/cart" exact component={Cart}/>
                <Route path="/checkout" exact component={Checkout}/>
            </Switch>
        </div>
      </Router>
  );
}

export default App;

