import {API} from "../api/Api";
import * as URLConstants from "../api/URLConstants";
import {useDispatch} from "react-redux";

export const userService = {
    getLoggedInUser
};

function getLoggedInUser() {
    return API.GET({url: URLConstants.AUTH_ME}).then(res => {
        return res.data;
    })
}
