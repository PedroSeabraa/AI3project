
import './App.css';
import CreateUser from './CreateUser';
import CreateOrder from './CreateOrder';
import CreateProduct from './CreateProduct';
import EditOrder from './EditOrder';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginUser from './LoginUser';
import ListUser from './ListUser';
import ListProduct from './ListProduct';
import ListOrder from './ListOrder';


function App() {
  return (
    <div className="App">

  <Router>   
<Route path="/CreateUser" component={CreateUser} />
<Route path="/CreateOrder" component={CreateOrder} />
<Route path="/CreateProduct" component={CreateProduct} />
<Route path="/EditOrder" component={EditOrder} />
<Route path="/LoginUser" component={LoginUser} />
<Route path="/ListUser" component={ListUser} />
<Route path="/ListOrder" component={ListOrder} />
<Route path="/ListProduct" component={ListProduct} />
</Router>

    </div>
  );
}

export default App;
