import React, {MouseEventHandler} from "react";
import loader from "../img/placeloader.gif";
export const Preloader = () => {
    return <div>
        <img src={loader}/>
    </div>
}