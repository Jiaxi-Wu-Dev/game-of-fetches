import React, { Component } from 'react';
import axios from 'axios'

class Founder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            data: []
        }
    }

    componentDidMount() {
        // attaching the api
        axios.get("http://www.anapioficeandfire.com/api/houses/362")
            // making a call for founder info
            .then(res => {
                const founderStark = res.data;
                console.log("data ---->", founderStark)

                this.setState({ data: founderStark })
                return axios.get("https://www.anapioficeandfire.com/api/characters/209")

            })

            .then(res => {
                const founderStarkName = res.data;
                console.log("data ---->", founderStarkName)

                this.setState({ data: founderStarkName })

            })

            .catch(error => {
                console.log('there is an eror', error)
            })
    }

    render() {
        return (
            <div>
                <h2> House Stark Founder</h2>
                {<ul>
                    {/* how to make chain calls? */}
                    {this.state.data.founder.name}
                </ul>}
            </div>
        )
    }
}

export default Founder;