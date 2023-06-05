import React from 'react';
import { Route, Navigate, RouteProps } from 'react-router-dom';
import Dashboard from './dashboard';
import Login from './login';

interface GuardRouteProps {
	path: string;
	redirectPath?: string;
	element: React.ReactNode;
}

const RouterGuard = (): JSX.Element => {
	return <div></div>;
};

export default RouterGuard;
