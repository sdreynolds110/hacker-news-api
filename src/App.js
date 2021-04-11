import React, {Component} from 'react'
import './App.css'
import Search from './Components/Search'
import Results from './Components/Results'

export default class App extends Component {
 render() {
   return <div id="app-container">
            <h1>Hacker News API</h1>
            <div id="search-container"><Search /></div>
            <div id="results-container"><Results /></div>
          </div>

  }
}