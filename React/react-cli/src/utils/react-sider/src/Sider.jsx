/*
 * @Author: kayak
 * @Date: 2018-09-04 17:06:06
 * -----
 * @Modified By: kayak
 * @Last Modified: 2018-09-04 17:06:06
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Icon } from 'react-router-dom';
import { Menu } from 'antd';
import memoize from 'memoize-one';
import map from 'lodash/map';

import formatMenuPath from './utils/formatMenuPath';

export default class Sider extends Component {
    static propTypes = {};

    // 处理菜单配置数据
    constructor() {
        this.fullPathMenuData = memoize((menuData) => formatMenuPath(menuData));
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
                    <Menu.SubMenu
                        key={item.path}
                        title={
                            <span>
                                <Icon type={item.icon} />
                                <span>{item.name}</span>
                            </span>
                        }>
                        {this.renderMenu(item.children)}
                    </Menu.SubMenu>
                );
            }
            return (
                <Menu.Item key={item.path}>
                    <Link to={item.path} href={item.path}>
                        <Icon type={item.icon} />
                        <span>{item.name}</span>
                    </Link>
                </Menu.Item>
            );
        });

    // 渲染侧边栏内容部分
    renderSiderBody = () => {
        const { prefixCls, menuData } = this.props;
        return (
            <div className={`${prefixCls}-body`}>
                <Menu theme="dark" mode="inline" style={{ padding: '16px 0', width: '100%' }}>
                    {this.renderMenu(menuData)}
                </Menu>
            </div>
        );
    };
    render() {
        const { prefixCls, className, style, width } = this.props;
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
