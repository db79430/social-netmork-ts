import React from "react";
import s from './Post.module.css';
import styles from "../../../Users/Users.module.css";

type PropsType = {
    messages: string;


}


export const Post = (props: PropsType) => {
    return <div>

        <div className={s.item}>
            <h3>{props.messages}</h3>
            <img/>

            <span>Like</span>
            <span>Dislike</span>


        </div>




    </div>


}