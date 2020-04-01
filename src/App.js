import React, { Component } from 'react'
import './App.css';
import axios from 'axios'

let tyrellOne = "https://anapioficeandfire.com/api/characters/16"
let targaryenTwo = "http://www.anapioficeandfire.com/api/houses/378"
let lannisterThree = "http://www.anapioficeandfire.com/api/houses/229"
let baratheonFour = "http://www.anapioficeandfire.com/api/houses/17"
let aliasFive = "http://www.anapioficeandfire.com/api/characters/901"
let starkSix = "http://www.anapioficeandfire.com/api/houses/362"
let booksSeven = "http://www.anapioficeandfire.com/api/characters/232"


const requestOne = axios.get(one);

requestOne.then(response => {
  console.log(response)
}).catch(error => {
  console.err(error)
})

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

      axios.get("http://www.anapioficeandfire.com/api/houses/378")
      // making a call for margaeryTyrells info
      // got a CORS error
      .then(res => {
        const houseTargaryen = res.data;
        console.log("data ---->", houseTargaryen)

        this.setState({ data: houseTargaryen })

      })
      .catch(error => {
        console.log('there is an eror', error)
      })

  }


  render() {
    return (
      <div>
        <h1> Game Of Thrones Characters </h1>
        <h2> Margaery Tyrells Birthdate</h2>
        {<ul>
          {this.state.data.born}
        </ul>}
      </div>
    )
  }
}