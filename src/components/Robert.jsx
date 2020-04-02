import React, { Component } from 'react';
import axios from 'axios'

class Robert extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            data: []
        }
    }

    componentDidMount() {
        // attaching the api
        axios.get("http://www.anapioficeandfire.com/api/characters/901")
            // making a call for lannister house info
            .then(res => {
                const robertBaratheon = res.data;
                console.log("data ---->", robertBaratheon)

                this.setState({ data: robertBaratheon })

            })
            .catch(error => {
                console.log('there is an eror', error)
            })
    }

    render() {
        return (
            <div>
                <h2> Robert Baratheon's Second Alias</h2>
                {<ul>
                    {/* not sure how to choose secondalias, sources say "objectName.arrayName[index you want to access]" tried that with aliases[1] but didnt work */}
                    {this.state.data.aliases}
                </ul>}
            </div>
        )
    }
}

export default Robert;