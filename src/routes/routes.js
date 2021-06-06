import { lazy } from 'react';
import { v4 as uuid } from 'uuid';

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    component: lazy(() => import('../pages/AuthPage/AuthPage')),
    path: '/',
    exact: true,
    key: uuid(),
    private: false,
    restricted: true,
  },
  {
    component: lazy(() => import('../pages/RegisterPage/RegisterPage')),
    path: '/register',
    exact: true,
    key: uuid(),
    private: false,
    restricted: true,
  },
  {
    component: lazy(() => import('../pages/LoginPage/LoginPage')),
    path: '/login',
    exact: true,
    key: uuid(),
    private: false,
    restricted: true,
  },
  {
    component: lazy(() => import('../pages/UserPage/UserPage')),
    path: '/user',
    exact: true,
    key: uuid(),
    private: true,
    restricted: true,
  },
  {
    component: lazy(() => import('../pages/HabitsPage/HabitsPage')),
    path: '/habits',
    exact: true,
    key: uuid(),
    private: true,
    restricted: false,
  },
  {
    component: lazy(() => import('../pages/HabitItemPage/HabitItem')),
    path: '/habitItem',
    exact: true,
    key: uuid(),
    private: true,
    restricted: true,
  },
];
