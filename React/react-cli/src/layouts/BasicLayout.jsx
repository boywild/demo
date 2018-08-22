import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Layout, Menu, Icon } from 'antd';

import './BasicLayout.scss';

const { Header, Content, Footer, Sider } = Layout;
export default class BasicLayout extends Component {
    static propTypes = {

    }
    renderHeader() {
        return (
            <div>
                <Layout  style={{ minHeight: '100vh' }}>
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
                </Layout>
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
