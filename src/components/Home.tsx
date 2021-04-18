import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../reducers/rootReducer";
import {useEffect} from "react";
import {API} from "../api/Api";
import * as Constants from "constants";
import {authActions} from "../actions/AuthActions";


function Home() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(authActions.checkUser());
    }, []);


    const user = useSelector((state: AppState) => state.auth.user);

    return (<div>
        Welcome Home component -- {user ? user.email: ""}
    </div>);

}

export default Home;
