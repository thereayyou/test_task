import React from 'react';
import {Navigate} from 'react-router-dom';

interface PrivateRouteProps {
    path: string;
    element: React.ReactElement;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        window.location.reload();
    };

    const getAccessToken = () => {
        return localStorage.getItem('access_token');
    };

    const getRefreshToken = () => {
        return localStorage.getItem('refresh_token');
    };

    const setTokens = (accessToken: string, refreshToken: string) => {
        localStorage.setItem('access_token', accessToken);
        localStorage.setItem('refresh_token', refreshToken);
    };

    const handleTokenRefresh = () => {
        const refresh_token = getRefreshToken();
        if (refresh_token) {
            const new_access_token = 'new_access_token';
            setTokens(new_access_token, refresh_token);
            return new_access_token;
        } else {
            handleLogout();
            return null;
        }
    };

    const authenticate = () => {
        const access_token = getAccessToken();
        if (access_token) {
            return true;
        } else {
            const refresh_token = getRefreshToken();
            if (refresh_token) {
                const new_access_token = handleTokenRefresh();
                if (new_access_token) {
                    return true;
                }
            }
            return false;
        }
    };

    return authenticate() ? (
        element
    ) : (
        <Navigate to="/login" replace={true} />
    );
};