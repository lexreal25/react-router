import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router,Route, Link, Switch} from 'react-router-dom'
import { route, connect } from './components/PageLink/link'


export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='main'>
          <nav className="main-links">
            {
              connect.map((link , i) => 
              <Link className='top' key={i} to={link.to}>
                {link.content}</Link>
              )
            }
            
          </nav>
          <Switch>
            {
              route.map((routes, i) => 
              //Exact returns exact match to the requested url
                <Route className='content' exact {...routes} key={i}/>
              )
            }
          </Switch>
        </div>
      </Router>
    )
  }
}
