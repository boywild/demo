import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import TabContent from './TabContent.js';
import TabNav from './TabNav.js';

let propTypes={
    classPrefix:PropTypes.string,
    className:PropTypes.string,
    defaultActiveIndex:PropTypes.number,
    activeIndex:PropTypes.number,
    onChange:PropTypes.func,
    children:PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}


class Tab extends Component{

    constructor(props){
        super(props);
        const defaultProps={
            classPrefix:'tab',
            onChange:()=>{}
        };
        const currProps=this.props;

        let activeIndex=0;
        if('activeIndex' in currProps){
            activeIndex=currProps.activeIndex;
        }else{
            activeIndex=currProps.defaultActiveIndex;
        }
        this.state={
            activeIndex,
            prevIndex:activeIndex
        }
        this.handleTabClick=this.handleTabClick.bind(this);
    }
    //挂载
    //渲染
    //卸载
    componentWillReceiveProps(nextProps){
        if('activeIndex' in nextProps){
            this.setState({
                activeIndex:nextProps.activeIndex
            });
        }
    }
    handleTabClick(){
        const prevIndex=this.state.activeIndex;
        if(this.state.activeIndex!==activeIndex&&'defaultActiveIndex' in props){
            this.setState({
                activeIndex,
                prevIndex
            });
            this.props.onChange({activeIndex,pervIndex});
        }
    }
    renderTabNav(){
        const {classPrefix,children}=this.props;
        return(
            <TabNav
                key="tabBar"
                classPrefix={classPrefix}
                onTabClick={this.handleTabClick}
                panels={children}
                activeIndex={this.state.activeIndex}
            />
        );
    }
    renderTabContent(){
        const {classPrefix,children}=this.props;
        return(
            <TabContent
                key="tabcontent"
                classPrefix={classPrefix}
                panels={children}
                activeIndex={this.state.activeIndex}
            />
        );
    }
    render(){
        const {className}=this.props;
        const classes=classnames(className,'ui-tabs');
        return(
            <div className={classes}>
                {this.renderTabNav()}
                {this.renderTabContent()}
            </div>
        );
    }
}

export default Tab;
