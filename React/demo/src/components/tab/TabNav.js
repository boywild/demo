import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

let propTypes={
    classPrefix:PropTypes.string,
    panels:PropTypes.node,
    activeIndex:PropTypes.number
}
class TabNav extends Component{
    constructor(props){
        super(props);
    }
    getTabs(){
        const {classPrefix,activeIndex,panels}=this.props;
        return React.Children.map(panels,(child)=>{
            if(!child) return;
            const order=parseInt(child.props.order,10);

            let classes=classnames({
                [`${classPrefix}-tab`]:true,
                [`${classPrefix}-active`]:activeIndex===order,
                [`${classPrefix}-disabled`]:child.props.disabled,
            });
            let events={};
            if(!child.props.disabled){
                events={
                    onClick:this.props.onTabClick.bind(this,order)
                };
            }
            const ref={};
            if(activeIndex===order){
                ref.ref='activeTab';
            }
            return(
                <li
                    role='tab'
                    aria-disabled={child.prpps.disabled?'true':'false'}
                    aria-selected={activeIndex===order?'true':'false'}
                    {...events}
                    className={classes}
                    key={order}
                    {...ref}
                    >{child.props.tab}</li>
            );
        });
    }
    render(){
        const {classPrefix}=this.props;
        const rootClasses=classnames({
            [`${classPrefix}-bar`]:true
        });
        const classes=classnames({
            [`${classPrefix}-nav`]:true
        });
        return(
            <div className={rootClasses} role="tablist">
                <ul className={classes}>
                    {this.getTabs()}
                </ul>
            </div>
        );
    }
}
export default TabNav;
