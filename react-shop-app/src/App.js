import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Navbar } from './components/navigation/Navbar';

import { Profile } from './views/Profile';
import { Login } from './views/Login';
import { Register } from './views/Register';
import { Products } from './views/Products';
import { Checkout } from './views/Checkout';
import { Product } from './views/Product';
import { AdminPage } from './views/AdminPage'
import { ProtectedRouteProfile, ProtectedRouteLoggedIn, ProtectedAdminPage } from './routes/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="my-padding-top container">
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/product/:id" exact component={Product} />
          <Route path="/checkout" exact component={Checkout} />
          <ProtectedRouteProfile path="/profile" exact component={Profile} />

          <ProtectedRouteLoggedIn path="/profile/login" exact component={Login} />
          <ProtectedRouteLoggedIn path="/profile/register" exact component={Register} />
          <ProtectedAdminPage path="/admin" exact component={AdminPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
