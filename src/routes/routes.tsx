import React from 'react';

/* Libraries */
import { useRoutes } from 'react-router-dom';

/* Route */
import AuthRoute from './AuthRoute';
import ProtectedRoute from './ProtectedRoute';

/* Paths */
import { paths } from 'paths/paths';

/* Pages */
import { Registration } from 'pages/registration';
import { SuccessfulRegistration } from 'pages/successfull_registration';
import { Login } from 'pages/login';
import { Shared } from 'pages/shared';
import { Storage } from 'pages/storage';
import { StatisticsPage } from 'pages/statistics';

/*Components*/
import Layout from 'layout/layout/Layout';
import { PersonalInformation } from 'pages/personal_information';
import { ChangePassword } from 'components/changePassword/ChangePassword';
import { LambdaPage } from 'pages/lambda';
import { Trash } from 'pages/trash';
import { Notifications } from 'pages/notifications';


const Routes = () => {
  const Routes = [
    {
      path: paths.SIGNIN,
      element: (
        <AuthRoute>
          <Login />
        </AuthRoute>
      ),
    },
    {
      path: paths.SIGNUP,
      element: (
        <AuthRoute>
          <Registration />
        </AuthRoute>
      ),
    },
    {
      path: paths.SUCCESSFULLREGISTRATION,
      element: (
        <AuthRoute>
          <SuccessfulRegistration />
        </AuthRoute>
      ),
    },
    {
      path: paths.STORAGE,
      element: (
        <ProtectedRoute>
          <Layout>
            <Storage />
          </Layout>
        </ProtectedRoute>
      ),
    },
    {
      path: paths.SHARED,
      element: (
        <ProtectedRoute>
          <Layout>
            <Shared />
          </Layout>
        </ProtectedRoute>
      ),
    },
    {
      path: paths.STATISTICS,
      element: (
        <ProtectedRoute>
          <Layout>
            <StatisticsPage />
          </Layout>
        </ProtectedRoute>
      ),
    },
    {
      path: paths.PERSONALINFORMATION,
      element: (
        <ProtectedRoute>
          <Layout>
            <PersonalInformation />
          </Layout>
        </ProtectedRoute>
      ),
    },
    {
      path: paths.CHANGEPASSWORD,
      element: (
        <ProtectedRoute>
          <Layout>
            <ChangePassword />
          </Layout>
        </ProtectedRoute>
      ),
    },
    {
      path: paths.NOTIFICATIONS,
            element: (
        <ProtectedRoute>
          <Layout>
            <Notifications />
          </Layout>
        </ProtectedRoute>
      ),
            },{
      path: paths.TRASH,
      element: (
        <ProtectedRoute>
          <Layout>
            <Trash />
          </Layout>
        </ProtectedRoute>
      ),
    },
    {
      path: paths.LAMBDA,
      element: (
        <ProtectedRoute>
          <Layout>
            <LambdaPage />
          </Layout>
        </ProtectedRoute>
      ),
    },
  ];

  const Routing = useRoutes(Routes);

  return <>{Routing}</>;
};

export default Routes;
