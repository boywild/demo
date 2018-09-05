import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Layout, Menu, Icon, Popover, Dropdown } from 'antd';
import Sider from 'utils/react-sider/src';

import menu from 'app/config/menu';

import logo from 'assets/images/logo.svg';

import './BasicLayout.scss';

const { Header, Content, Footer } = Layout;

export default class BasicLayout extends Component {
    static propTypes = {
        prefixCls: PropTypes.string
    };
    renderHeader = () => {
        const noticeMenu = () => {
            return '';
        };
        const userMenu = (
            <Menu>
                <Menu.Item key="1" className="basicLayout-userMenuItem" disabled>
                    <Icon type="user" />
                    <span>asdf asdfas</span>
                </Menu.Item>
                <Menu.Item key="2" className="basicLayout-userMenuItem" disabled>
                    <Icon type="setting" />
                    <span>nasssv 2</span>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3" className="basicLayout-userMenuItem">
                    <div role="presentation">
                        <Icon type="logout" className="basicLayout-userMenuIcon" />
                        <span className="nav-text">退出登录</span>
                    </div>
                </Menu.Item>
            </Menu>
        );
        return (
            <div>
                <div className="basicLayout">
                    <Sider appName="test" appLogo={logo} menuData={menu} />
                    <div className="basicLayout-content">
                        <div className="basicLayout-header">
                            <div className="basicLayout-notice">
                                <Popover
                                    placement="bottomRight"
                                    trigger="click"
                                    arrowPointAtCenter
                                    content={noticeMenu}>
                                    <Icon className="basicLayout-noticeIcon" type="bell" />
                                </Popover>
                            </div>
                            <Dropdown overlay={userMenu} placement="bottomRight">
                                <div className="basicLayout-avatarContainer">
                                    <Avatar className="basicLayout-avatar" icon="user" />
                                </div>
                            </Dropdown>
                        </div>

                        <div className="basicLayout-mainContent" />
                    </div>
                </div>
            </div>
        );
    };
    renderPageHeader = () => {
        return (
            <div className="basicLayout-pageHeader">
                {this.renderBreadcrumb()}
                <div className="basicLayout-pageTitle">pageTitleStr</div>
            </div>
        );
    };
    renderBreadcrumb = () => {};
    renderFooter = () => <div className="basicLayout-footer">Copyright © 2018</div>;
    render() {
        return <div>{this.renderHeader()}</div>;
    }
}
