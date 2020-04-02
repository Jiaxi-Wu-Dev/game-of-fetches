import React, { Component } from 'react';
import axios from 'axios'

class Lannister extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            data: []
        }
    }

    componentDidMount() {
        // attaching the api
        axios.get("http://www.anapioficeandfire.com/api/houses/229")
            // making a call for lannister house info
            .then(res => {
                const houseLannister = res.data;
                console.log("data ---->", houseLannister)

                this.setState({ data: houseLannister })

            })
            .catch(error => {
                console.log('there is an eror', error)
            })
    }

    render() {
        return (
            <div>
                <h2> House Lannister Coat of Arms</h2>
                {<ul>
                    {this.state.data.coatOfArms}
                </ul>}
            </div>
        )
    }
}

export default Lannister;