import * as React from 'react';
import {RouteComponentProps, withRouter} from "react-router";


class Login extends React.Component<RouteComponentProps, {}> {


    render(): React.ReactNode {
        return <div>
            <button><a href={"http://localhost:4000/auth/google"} >Login</a></button>
        </div>
    }
}

export default withRouter(Login);
