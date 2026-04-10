import { lazy } from 'react';

// project-imports
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';

// render - Dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/default')));
const CustomerPage = Loadable(lazy(() => import('pages/collections/customer')));
const CustomerViewPage = Loadable(lazy(() => import('pages/collections/customer-view')));

// render - utils components
const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));
const UserRolesPage = Loadable(lazy(() => import('pages/extra-pages/user-roles')));

// ==============================|| MAIN ROUTES ||============================== //
const AuthLogin = Loadable(lazy(() => import('sections/auth/auth-forms/AuthLogin')));


const MainRoutes = {
  path: '/',
  element: <DashboardLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: '/',
      children: [
        {
          path: 'dashboard',
          element: <DashboardDefault />
        },
        {
          path: 'sanction',
          element: <SamplePage />
        },
        {
          path: 'customer',
          element: <CustomerPage />
        },
        {
          path: 'customer/view/:id',
          element: <CustomerViewPage />
        },
        {
          path: 'loans',
          element: <CustomerPage />
        },
        {
          path: 'credit-executive',
          element: <CustomerPage />
        },
        {
          path: 'sanction-manager',
          element: <SamplePage />
        },
        {
          path: 'sanction-head',
          element: <SamplePage />
        },
        {
          path: 'loan-ops',
          element: <CustomerPage />
        },
        {
          path: 'all-collection',
          element: <CustomerPage />
        },
        {
          path: 'pre-collection',
          element: <CustomerPage />
        },
        {
          path: 'post-collection',
          element: <CustomerPage />
        },
        {
          path: 'completed-loans',
          element: <CustomerPage />
        },
        {
          path: 'mis-reports',
          element: <CustomerPage />
        },
        {
          path: 'reminders',
          element: <CustomerPage />
        },
        {
          path: 'user-roles',
          element: <UserRolesPage />
        }
      ]
    },
    {
      path: 'typography',
      element: <Typography />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'shadows',
      element: <Shadow />
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;
