import React, { Component } from 'react'
import { httpFetch } from 'util/httpFetch'
import Award from 'components/award/Award'



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

        // httpFetch.fetchRequest('http://api.noods.me/getAuthor', 'POST')
        //     .then((json) => console.log(json))
    }
    render() {
        return (
            <div>
                <Award />
                App
            </div>
        )
    }
}
