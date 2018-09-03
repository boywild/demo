import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Layout, Menu, Icon, Popover } from 'antd';

import logo from 'assets/images/logo.svg';

import './BasicLayout.scss';

const { Header, Content, Footer, Sider } = Layout;
export default class BasicLayout extends Component {
    static propTypes = {
        prefixCls: PropTypes.string
    }
    renderHeader() {
        const noticeMenu=()=>{
            return '';
        }
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
                        <div className="react-sider-content">
                            <ul className=""></ul>
                        </div>
                    </div>
                    <div className="basicLayout-content">
                        <div className="basicLayout-header">
                            <div className="basicLayout-notice">
                                <Popover
                                    placement="bottomRight"
                                    trigger="click"
                                    arrowPointAtCenter
                                    content={noticeMenu}
                                >
                                    <Icon className="basicLayout-noticeIcon" type="bell"></Icon>
                                </Popover>
                            </div>
                        </div>
                        <div className="basicLayout-pagerHeader"></div>
                        <div className="basicLayout-mainContent"></div>
                        <div className="basicLayout-footer"></div>
                    </div>
                </div>
                {/* <Layout style={{ minHeight: '100vh' }}>
                    <Sider
                        breakpoint="lg"
                        collapsedWidth="0"
                        onBreakpoint={(broken) => { console.log(broken); }}
                        onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                    >
                        <div className="logo" />
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
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
                    </Sider>
                    <Layout>

                        <Header className='test'>
                            <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
                        </Header>
                        <Content style={{ margin: '24px 16px 0' }}>
                            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>content</div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            Ant Design ©2018 Created by Ant UED
                        </Footer>
                    </Layout>
                </Layout> */}
            </div>
        );
    }
    renderPageHeader() { }
    renderBreadcrumb() { }
    renderFooter() { }
    render() {
        return (
            <div>
                {this.renderHeader()}
            </div>
        )
    }
}
