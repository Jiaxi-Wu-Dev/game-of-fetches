import React, { Component } from 'react';
import axios from 'axios'

class Targaryen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            data: []
        }
    }

    componentDidMount() {
        // attaching the api
        axios.get("http://www.anapioficeandfire.com/api/houses/378")
            // making a call for targaryen house info
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
                <h2> House Targaryen Region</h2>
                {<ul>
                    {this.state.data.region}
                </ul>}
            </div>
        )
    }
}

export default Targaryen;