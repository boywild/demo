import React, { Component } from 'react'
import HTTP from 'util/httpFetch'


export default class App extends Component {
    componentWillMount() {
        // fetch('https://www.reddit.com/r/reactjs.json')
        //     .then((response) => response.json())
        //     .then((json) => console.log(json))
        // fetch('http://api.noods.me/getAuthor', {
        //     method: 'POST'
        // })
        //     .then((response) => response.json())
        //     .then((json) => console.log(json))

        HTTP.post('http://api.noods.me/getAuthor')
            .then((json) => console.log(json))
    }
    render() {
        console.log(HTTP);
        return (
            <div>
                App
            </div>
        )
    }
}
