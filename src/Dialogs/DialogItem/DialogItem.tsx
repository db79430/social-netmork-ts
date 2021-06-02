import s from "../DialogItem/DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogData = {
    name: string;
    id: number;

}


 export const DialogItem = (props: DialogData) => {
    return (


        <div className={s.item + '' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>

        </div>

    )
}