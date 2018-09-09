import Login from 'views/login';
import Outlets from 'views/outlets';
import OutletDetail from 'views/outletDetail';
import WorkInProgress from 'views/workInProgress';
import Unauthorized from 'views/unauthorized';

/**
 * react-route-config配置文件
 * [path|exact|component|routes] 官方提供配置参数
 * [permissions|redirect|pageTitle|breadcrumb|unauthorized]
 */

const routes = [
    {
        path: '/dashboard',
        component: WorkInProgress,
        exact: true,
        permissions: ['admin', 'user'],
        redirect: '/login',
        pageTitle: '',
        routes: [
            {
                path: '/analysis',
                component: WorkInProgress,
                exact: true,
                routes: [
                    {
                        path: '/realtime',
                        component: WorkInProgress,
                        exact: true
                    },
                    {
                        path: '/offline',
                        component: WorkInProgress,
                        exact: true
                    }
                ]
            },
            {
                path: '/workplace',
                component: WorkInProgress,
                exact: true
            }
        ]
    },
    {
        path: '/outlets',
        component: Outlets,
        exact: true,
        unauthorized: Unauthorized,
        pageTitle: 'pageTitle_outlets',
        breadcrumb: ['/outlets'],
        routes: [
            {
                path: '/:id',
                component: OutletDetail,
                unauthorized: Unauthorized,
                pageTitle: 'pageTitle_outletDetail',
                breadcrumb: ['/outlets', '/outlets/:id']
            }
        ]
    },
    {
        path: '/exception',
        component: OutletDetail,
        exact: true,
        routes: [
            {
                path: '/403',
                component: WorkInProgress,
                exact: true
            },
            {
                path: '/404',
                component: WorkInProgress,
                exact: true
            }
        ]
    }
];

export default routes;
