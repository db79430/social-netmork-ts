import React from "react";
import s from './Post.module.css';

type PropsType = {
    message: string;


}


export const Post = (props: PropsType) => {
    return <div>

        <div className={s.item}>
            <h3>{props.message}</h3>
            <img src='https://note-store.ru/upload/resize_cache/iblock/f57/325_380_2/Ava-Max.jpg'/>

            <span>Like</span>
            <span>Dislike</span>


        </div>




    </div>


}