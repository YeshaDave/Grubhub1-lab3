import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import {BrowserRouter} from 'react-router-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';


// import TravelerLogin from './components/Login/TravelerLogin';
// import {BrowserRouter,Route,Switch} from 'react-router-dom';
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware, compose } from "redux";
// import promise from "redux-promise";

// import RootReducer from "./reducers";

// const composePlugin = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
// const store = createStore(RootReducer, composePlugin(applyMiddleware(promise)));

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
  credentials: 'include'
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token,
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()  
});
//App Component
class App extends Component {
  
  render() {
    
    return (
      // <Provider store={store}>
      // {/* //Use Browser Router to route to different pages */}
      <ApolloProvider client={client}>
      <BrowserRouter>
        <div>
        <Main/>
    
          {/* <Switch>
          <Route path="/travelerlogin" component={TravelerLogin}/>
            </Switch> */}
          {/* App Component Has a Child Component called Main*/}
        </div>
      </BrowserRouter>
      // </ApolloProvider>
    );
  }
}
//Export the App component so that it can be used in index.js
export default App;