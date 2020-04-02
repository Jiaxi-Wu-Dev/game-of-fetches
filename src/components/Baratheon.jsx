import React, { Component } from 'react';
import axios from 'axios'

class Baratheon extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            data: []
        }
    }

    componentDidMount() {
        // attaching the api
        axios.get("http://www.anapioficeandfire.com/api/houses/17")
            // making a call for lannister house info
            .then(res => {
                const houseBaratheon = res.data;
                console.log("data ---->", houseBaratheon)

                this.setState({ data: houseBaratheon })

            })
            .catch(error => {
                console.log('there is an eror', error)
            })
    }

    render() {
        return (
            <div>
                <h2> Second Seat of House Baratheon</h2>
                {<ul>
                    {this.state.data.seats}
                </ul>}
            </div>
        )
    }
}

export default Baratheon;