    import { FunctionComponent } from "react";
    import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
    import { LoginComponent, UserComponent } from "../../../components";
    import { PrivateRoute } from "../private-route";
    import { NotFoundComponent } from "../../../components/not-found";
import { HeaderComponent } from "../header";

    interface RouterComponentProps {

    }

    const RouterComponent: FunctionComponent<RouterComponentProps> = () => {

        const getPrivateRoute = (component: FunctionComponent, scope: string) => {
            return <PrivateRoute component={component} scope={scope} />
        }

        const privateComponents = [{
            path: '/user',
            component: UserComponent,
            scope: 'USER_COMPONENT'
        }]

        return (<>
            <BrowserRouter basename="/">
                <HeaderComponent></HeaderComponent>
                <Routes >
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path='/login' element={<LoginComponent />} />

                    {/* Private routes */}
                    {privateComponents.map(props => <Route key={props.path} path={props.path} element={getPrivateRoute(props.component, props.scope)} />)}

                    {/* Not found route */}
                    <Route path="*" element={<NotFoundComponent />} />
                </Routes>
            </BrowserRouter></>);
    }

    export { RouterComponent };