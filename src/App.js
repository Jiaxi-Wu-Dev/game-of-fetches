import React, { Component } from 'react'
import './App.css';
import axios from 'axios'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      data: []
    }
  }

  componentDidMount() {
    // attaching the api
    axios.get("https://anapioficeandfire.com/api/characters/16")
      // making a call for margaeryTyrells info
      // got a CORS error
      .then(res => {
        const margaeryTyrell = res.data;
        console.log("data ---->", margaeryTyrell)

        this.setState({ data: margaeryTyrell })

      })
      .catch(error => {
        console.log('there is an eror', error)
      })

  }


  render() {
    return (
      <div>
        <h1> Game Of Thrones Characters </h1>
        {<ul>
          {this.state.data.map((character, id) => <li key={id}> {character.name} </li>)}
        </ul>}
      </div>
    )
  }
}