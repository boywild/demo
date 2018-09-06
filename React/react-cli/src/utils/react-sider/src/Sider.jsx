/*
 * @Author: kayak
 * @Date: 2018-09-04 17:06:06
 * -----
 * @Modified By: kayak
 * @Last Modified: 2018-09-04 17:06:06
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import memoize from 'memoize-one';
import map from 'lodash/map';
import reduce from 'lodash/reduce';

import formatMenuPath from './utils/formatMenuPath';
import getFlatMenuKeys from './utils/getFlatMenuKeys';
import urlToList from './utils/urlToList';
import getMeunMatchKeys from './utils/getMeunMatchKeys';

import './Sider.scss';

const { SubMenu } = Menu;

export default class Sider extends Component {
    static propTypes = {
        appLogo: PropTypes.string,
        appName: PropTypes.string,
        menuData: PropTypes.array,
        prefixCls: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,
        width: PropTypes.number
    };
    static defaultProps = {
        prefixCls: 'react-sider',
        className: '',
        style: {},
        appName: '',
        appLogo: '',
        appBaseUrl: '/',
        width: 256,
        menuData: [],
        pathname: '/'
    };
    // 处理菜单配置数据
    constructor(props) {
        super(props);
        this.fullPathMenuData = memoize((menuData) => formatMenuPath(menuData));
        this.selectedKeys = memoize((pathname, fullPathMenu) => {
            getMeunMatchKeys(getFlatMenuKeys(fullPathMenu), urlToList(pathname));
        });
        const { pathname, menuData } = props;
        this.state = {
            openKeys: this.selectedKeys(pathname, this.fullPathMenuData(menuData))
        };
    }

    // 渲染侧边栏头部
    renderSiderHeader = () => {
        const { appLogo, prefixCls, appName } = this.props;
        return (
            <Link to="/">
                <div className={`${prefixCls}-header`}>
                    <img className={`${prefixCls}-logo`} src={appLogo} alt="logo" />
                    <div className={`${prefixCls}-appName`}>{appName}</div>
                </div>
            </Link>
        );
    };

    // 渲染菜单部分
    renderMenu = (data) =>
        map(data, (item) => {
            if (item.children) {
                return (
                    <SubMenu
                        key={item.path}
                        title={
                            <span>
                                {item.icon ? <Icon type={item.icon} /> : ''}
                                <span>{item.name}</span>
                            </span>
                        }>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                );
            }
            return (
                <Menu.Item key={item.path}>
                    <Link to={item.path} href={item.path}>
                        {item.icon ? <Icon type={item.icon} /> : ''}
                        <span>{item.name}</span>
                    </Link>
                </Menu.Item>
            );
        });

    // 处理submenu展开/关闭回调
    handleOpenChange = (openKeys) => {
        this.setState({
            openKeys
        });
        console.log(openKeys);
    };
    // 渲染侧边栏内容部分
    renderSiderBody = () => {
        const { prefixCls, menuData, pathname } = this.props;
        const { openKeys } = this.state;
        return (
            <div className={`${prefixCls}-body`}>
                <Menu
                    theme="dark"
                    mode="inline"
                    openKeys={openKeys}
                    selectedKeys={this.selectedKeys(pathname, this.fullPathMenuData(menuData))}
                    onOpenChange={this.handleOpenChange}
                    style={{ padding: '16px 0', width: '100%' }}>
                    {this.renderMenu(this.fullPathMenuData(menuData))}
                </Menu>
            </div>
        );
    };
    render() {
        const { prefixCls, className, style, width, menuData } = this.props;
        const classes = `${prefixCls} ${className}`;
        const styles = {
            ...style,
            width
        };
        return (
            <div className={classes} style={styles}>
                {this.renderSiderHeader()}
                {this.renderSiderBody()}
            </div>
        );
    }
}
