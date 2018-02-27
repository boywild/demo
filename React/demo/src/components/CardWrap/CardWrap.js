import React, {Component} from 'react';
import Card from 'card/Card.js';

export default class CardWrap extends Component{

    render(){
		let {data}=this.props
		let cards=data.map((ele,index)=>{
			return(
				<Card key={index} {...ele}/>
			)
			console.log(ele,index);
		});
        return (
            <div className="ui cards">
			{cards}
            </div>
        )
    }
}
