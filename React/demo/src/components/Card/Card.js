import React,{Component} from 'react';
import PropTypes from 'prop-types';

let contextTypes={
	et:PropTypes.string
}

export default class Card extends Component{
	constructor(props){
		super(props);
		this.state={
			isHeartOn:false,
			year:this.props.joined
		};
		this.isHeartOn=this.isHeartOn.bind(this);
		this.yearAdd=this.yearAdd.bind(this);
	}
	isHeartOn(){
		let {isHeartOn}=this.state;
		isHeartOn=!isHeartOn;
		this.setState({
			isHeartOn:isHeartOn
		});
	}
	yearAdd(){

		let {year}=this.state;
		this.setState({
			year:year+10
		});
		this.isHeartOn();
	}
	render(){
		console.log(888);
		let {imgSrc,name,meta,desc,joined,likeNum}=this.props;
		let {et}=this.context;
		let {isHeartOn}=this.state;
		let flag=isHeartOn?'':'empty';
		let {year}=this.state;
		return(
			<div className="ui card">
					<div className="image">
							<img src={imgSrc} alt=""/>
					</div>
					<div className="content">
							<div className="header">{name}</div>
							<div className="meta">
									<a href="">{meta}</a>
							</div>
							<div className="description">{desc}</div>
					</div>
					<div className="extra content">
							<span
							onClick={this.yearAdd}
							className="right floated"> {`${et} in ${year}`} </span>
							<span>
									<i
									className={`${flag} heart icon`}
									onClick={this.isHeartOn}
									>
									</i> {`${likeNum} Like`}
							</span>
					</div>
			</div>
			)
	}
}
Card.contextTypes=contextTypes;
