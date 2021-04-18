import {API} from "./Api";
import * as URLConstants from "./URLConstants"

export class AuthApi {

    public static getLoggedInUser(): Promise<any> {
        return API.GET({url:URLConstants.AUTH_ME});
    }


}
