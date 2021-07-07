import s from "../ProfileTSX.module.css";
import React from "react";
import {ProfilePropsType} from "../ProfileTSX";
import {ProfileStatus} from "./ProfileStatus";
import {Preloader} from "../../common/Pleloader";





export const ProfileInfo = (props: ProfilePropsType) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div className={s.main}>
            <h3>ProfileInfo</h3>
            <div className={s.item}>
                <img src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'/>
            </div>
            <div className={s.ava}>

                <img src={props.profile.photos.large}/>
                <ProfileStatus status={'Hello'}   updateUserStatus={props.updateUserStatus} />
            </div>
        </div>
    )
}