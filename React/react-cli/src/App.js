import React, { Component } from 'react';
import { httpFetch } from 'util/httpFetch';
import encryption from 'util/encryption';

import Award from 'components/award/Award';
import { setLocal, getLocal, setSession, getSession, clearLocal, clearSession, clearAllLocal, clearAllSession } from 'util/storage'
import Logger from 'util/logger'




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

        encryption.aesDecrypt(this.plaintText).then((data) => {

            console.log(data);
        })
        encryption.aesDecrypt('b121392dab9cf2e5160ba81c94e5f999').then((data) => {

            console.log(data);
        })
        setLocal('userinfo', { name: [1, 2, 3] }).then((data) => {
            console.log(data);
        });
        setSession('userinfo', { name: 'chentian' }).then((data) => {
            console.log(data);
        });
        getLocal('userinfo').then((data) => {
            console.log(data);
        });
        getSession('userinfo').then((data) => {
            console.log(data);
        });
        // clearLocal('userinfo').then((data) => {
        //     console.log(data);
        // })
        // clearSession('userinfo').then((data) => {
        //     console.log(data);
        // })
        clearAllLocal().then((data) => {
            console.log(data);
        });
        clearAllSession().then((data) => {
            console.log(data);
        })
        // Logger.printLog('name',"chentian");
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
