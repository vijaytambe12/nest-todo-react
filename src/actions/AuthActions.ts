import * as Constants from "./Constants"
import {User} from "../types/User";
import {useDispatch} from "react-redux";
import {userService} from "../services/UserService";
import {Dispatch} from "redux";


interface ILogin {
    user: User,
    type: Constants.LOGIN
}

export const authActions = {
    checkUser
};

function checkUser() {

    return (dispatch:any) => {
        userService.getLoggedInUser().then(res => {
            dispatch(success(res));
        })
    };

    function success(user: User) { return { type: Constants.LOGIN, user } }
}

export type AuthActions = ILogin


