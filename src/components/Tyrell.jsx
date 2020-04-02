import React, { Component } from 'react';
import axios from 'axios'

class Tyrell extends Component {
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
      <h2> Margaery Tyrells Birthdate</h2>
      {<ul>
        {this.state.data.born}
      </ul>}
    </div>
  )
}
}
 
export default Tyrell;