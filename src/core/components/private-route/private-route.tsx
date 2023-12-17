import { FunctionComponent } from "react";
import { PrivateRouteProps } from "./private-route.interface";
import { Navigate } from "react-router-dom";

const PrivateRoute: FunctionComponent<PrivateRouteProps> = ({ component: Component, scope }) => {
    return (
        <>
            {false ? <Component /> : <Navigate to='/login'></Navigate>}
        </>);
}

export { PrivateRoute };