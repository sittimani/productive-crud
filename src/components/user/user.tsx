import { FunctionComponent } from "react";
import { UserComponentProps } from "./user.interface";

const UserComponent: FunctionComponent<UserComponentProps> = () => {
    return (<>
        <p>
            user component works!!!
        </p>
    </>);
}

export { UserComponent };