import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

import AppRouting from './AppRouting';

import ProtectedAdminRoute from './components/routes/ProtectedAdminRoute';
import ProtectedUserRoute from './components/routes/ProtectedUserRoute';

import AdminHome from './components/adminPanel/home/AdminHome';
import MainHome from './components/homePage/MainHome';
import ShopMain from './components/shop/ShopMain';
import ProdDet from './components/shop/ProdDet';
import Login from './components/common/Login';
import UserHome from './components/user/UserHome';
import UserProfile from './components/user/UserProfile';
import EditUserProfile from './components/user/EditUserProfile';
import Contact from './components/contact/Contact';
import Register from './components/AddUserForm';
// import ShowArticle from './components/blog/Show';
// import Blog from './components/blog/Blog';
import Header from './components/common/Header';
import Cart from './components/user/Cart';
import Checkout from './components/user/Checkout';


const API = `http://localhost:5000/api/`;

class App extends Component {
  constructor(props) {
    super(props);
    if (localStorage.getItem('user')) {
      this.state = {
        user: JSON.parse(localStorage.getItem('user')),
        location: ''
      };
    } else {
      this.state = {
        user: null,
        location: ''
      };
    }
  }
  render() {
    const user = this.state.user;
    const url = user ? `${API}users/${user.id}` : `${API}users/guest`;

    return (
      <Router>
        <AppRouting>
          <Header />
          <Route path="/" exact render={props => <MainHome {...props} />} />
          <Route path="/shop" render={props => <ShopMain {...props} />} />
          <Route
            path={`/products/:id`}
            render={props => <ProdDet {...props} />}
          />
          <Route path="/contact" render={props => <Contact {...props} />} />
          {/* <Route path="/article" render={props => <ShowArticle {...props} />} /> */}
          {/* <Route path="/blog" render={props => <Blog {...props} />} /> */}
          <Route
            path="/login"
            render={props => <Login {...props} url={`${API}users/login`} />}
          />
          <Route
            path="/register"
            render={props => <Register url={`${API}users/`} {...props} />}
          />
          <Route
            path="/user/edit/:id"
            render={props => (
              <EditUserProfile url={`${API}users/`} {...props} />
            )}
          />
          <Route path="/user/cart" render={props => <Cart {...props} />} />
          <Route
            path="/user/cart/checkout"
            render={props => <Checkout {...props} />}
          />

          <ProtectedUserRoute path="/user" component={UserHome} url={url} />
          <ProtectedUserRoute
            path="/user/profile"
            component={UserProfile}
            url={url}
          />
          <ProtectedAdminRoute path="/admin" component={AdminHome} />
        </AppRouting>
      </Router>
    );
  }
  
}

export default App;
