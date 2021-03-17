import React from 'react';
import {
  Route, Switch
} from "react-router-dom";
import { BookDetailPage, BooksPage, HomePage, LoginPage, MyOrder, ProfilePage } from '../../pages';
import ProtectedRoutes from '../ProtectedRoutes';


const RouterPath = () => {
    return (
        <Switch>
          <Route path="/login" component={LoginPage}/>
          <Route exact path="/" component={HomePage}/>
          <ProtectedRoutes path="/books" component={BooksPage} />
          <ProtectedRoutes path="/book-detail/:id" component={BookDetailPage} />
          <ProtectedRoutes path="/my-order" component={MyOrder} />
          <ProtectedRoutes path="/Profile" component={ProfilePage}/>
        </Switch>
    )
}

export default RouterPath;