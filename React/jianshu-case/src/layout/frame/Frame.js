import {Route} from 'react-router-dom';
import Nav from 'nav/Nav';
import Home from 'view/home/Home.js';
import S from './frame.scss';
require('semantic/dist/semantic.min.css');
require('semantic/dist/semantic.min.js');
export default class Layout extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className={S.layout}>
                <Nav/>
                <Route exact path="/" component={Home}/>
            </div>
        );
    }
}
