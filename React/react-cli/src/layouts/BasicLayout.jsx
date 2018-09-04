import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Layout, Menu, Icon, Popover, Dropdown } from 'antd';

import logo from 'assets/images/logo.svg';

import './BasicLayout.scss';

const { Header, Content, Footer, Sider } = Layout;
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
                    <div className="react-sider">
                        <a href="/">
                            <div className="react-sider-header">
                                <img className="react-sider-logo" src={logo} />
                                <div className="react-sider-appName">React App Pro</div>
                            </div>
                        </a>
                        <div className="react-sider-body">
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} style={{ padding: '16px 0', width: '100%' }}>
                                <Menu.Item key="1">
                                    <Icon type="user" />
                                    <span className="nav-text">nav 1</span>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Icon type="video-camera" />
                                    <span className="nav-text">nav 2</span>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Icon type="upload" />
                                    <span className="nav-text">nav 3</span>
                                </Menu.Item>
                                <Menu.Item key="4">
                                    <Icon type="user" />
                                    <span className="nav-text">nav 4</span>
                                </Menu.Item>
                            </Menu>
                        </div>
                    </div>
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
