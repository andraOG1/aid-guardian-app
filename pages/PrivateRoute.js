import React, {useContext} from "react";
import {Route, Navigate} from "react-router-dom";
import {AuthContext} from "../../../frontend/src/Contexts";

const PrivateRoute = ({children}) => {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
}

export default PrivateRoute;