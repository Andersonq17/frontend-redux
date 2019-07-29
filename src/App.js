import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostList from './components/PostList'
import Navbar from './components/Navbar';
import CrearPost from './components/CrearPost';
import EditarPost from './components/EditarPost';
import {Provider} from 'react-redux';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
     <Navbar/>
     <Route path="/" exact component={PostList}/>
     <Route path ="/crear" component={CrearPost}/>
     <Route path ="/editar/:id" component={EditarPost}/>
   </Router>
    </Provider>
   
  );
}

export default App;
