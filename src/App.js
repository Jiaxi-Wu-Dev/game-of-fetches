import React, { Component } from 'react'
import './App.css';
import Tyrell from './components/Tyrell'
import Targaryen from './components/Targaryen'
import Lannister from './components/Lannister';
import Baratheon from './components/Baratheon'
import Robert from './components/Robert'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      data: []
    }
  }



  render() {
    return (
      <div>
        <h1> Game Of Thrones Characters </h1>
        <Tyrell />
        <Targaryen />
        <Lannister />
        <Baratheon />
        <Robert />
      </div>
    )
  }
}