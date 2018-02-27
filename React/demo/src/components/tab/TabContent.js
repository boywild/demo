import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import TabPane from './TabPane.js';


class TabContent extends Component{
    constructor(props){
        super(props);
    }
    getTabPans(){
        const {classPrefix,activeIndex,panels,isActive}=this.props;
        return React.Children.map(panels,(child)=>{
            if(!child){return;}

            const order=parseInt(child.props.order,10);
            const isActive=activeIndex===order;

            return React.cloneElement(child,{
                classPrefix,
                isActive,
                children:child.props.children,
                key:`tabpane-${order}`
            });

        });
    }
    render(){
        const {classPrefix}=this.props;
        const classes=classnames({
            [`${classPrefix}-content`]:true
        });
        return(
            <div className={classes}>{this.getTabPans()}</div>
        );
    }
}

export default TabContent;
