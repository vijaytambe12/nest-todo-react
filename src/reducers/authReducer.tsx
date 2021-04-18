import * as Constants from "../actions/Constants"
import {User} from "../types/User";
import {AuthActions} from "../actions/AuthActions";

type InitStateAuth = {
    user: User | null
}

const initState: InitStateAuth = {
    user: null
};

const authReducer = (state: InitStateAuth = initState, action: AuthActions) => {

    switch (action.type) {
        case Constants.LOGIN: {
            return {
                ...state, user: action.user
            }
        }
        default : {
            return state;
        }
    }
};

export default authReducer;


