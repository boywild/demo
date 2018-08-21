import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Dropdown, Menu, Icon, Breadcrumb, Popover } from 'antd';

export default class BasicLayout extends Component {
    static propTypes = {

    }
    renderHeader(){
        //
        return (
            <div>
                <Avatar size={64} icon="user" />
            </div>
        );
    }
    renderPageHeader(){}
    renderBreadcrumb(){}
    renderFooter(){}
    render() {
        return (
            <div>
               asdfas 
            </div>
        )
    }
}
