import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import First from './components/first';
import Second from './components/Second';
import Search from './components/Search';
import Home from './components/Fourth';
import AddBlog from './components/AddBlog';
import UpdateBlog from './components/UpdateBlog';


function App() {
  return (
    <div className="App">
      
      <Router>
        <First/>
        <Second/>
        
        <Switch>
          
          <Route exact path='/'>
            <Home/>
          </Route>

          <Route path='/AddBlog'>
            <AddBlog/>
          </Route>

          <Route path='/UpdateBlog'> <UpdateBlog/> </Route>
          <Route path='/Search'> <Search/> </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
