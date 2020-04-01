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
  let tyrellOne = "https://anapioficeandfire.com/api/characters/16"
let targaryenTwo = "http://www.anapioficeandfire.com/api/houses/378"
let lannisterThree = "http://www.anapioficeandfire.com/api/houses/229"
let baratheonFour = "http://www.anapioficeandfire.com/api/houses/17"
let aliasFive = "http://www.anapioficeandfire.com/api/characters/901"
let starkSix = "http://www.anapioficeandfire.com/api/houses/362"
let booksSeven = "http://www.anapioficeandfire.com/api/characters/232"

const requestOne = axios.get(tyrellOne);
const requestTwo = axios.get(targaryenTwo);
const requestThree = axios.get(lannisterThree);
const requestFour = axios.get(baratheonFour);
const requestFive = axios.get(aliasFive);
const requestSix = axios.get(starkSix);
const requestSeven = axios.get(booksSeven);

axios.all([requestOne, requestTwo, requestThree]).then(axios.spread((...responses) => {
  const responseOne = responses[0]
  const responseTwo = responses[1]
  const responesThree = responses[2]
  // use/access the results 
})).catch(errors => {
  // react on errors.
})

/* componentDidMount() {
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
*/

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