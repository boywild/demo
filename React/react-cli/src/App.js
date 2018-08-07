import React, { Component } from 'react';
import { httpFetch } from 'util/httpFetch';
import encryption from 'util/encryption';

import Award from 'components/award/Award';



export default class App extends Component {
    plaintText = 'chentian';
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

        encryption.encrypt(this.plaintText).then((data)=>{
            console.log(data);
        })
        encryption.decryp('b121392dab9cf2e5160ba81c94e5f999').then((data)=>{
            console.log(data);
        })


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
