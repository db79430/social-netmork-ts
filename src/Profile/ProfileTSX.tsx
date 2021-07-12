import React, {useState} from "react";
import s from './ProfileTSX.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";



import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {addSendMessageAC} from "../Redux/dialogs-reducer";



export type ProfilePropsType = {
    profile: any
    getUsersProfile: (usersId: string) => void
    status: string
    updateUserStatus: (status: string) => void


}

export const Profile = (props: ProfilePropsType ) => {
    return (
        <div className={s.main}>
            <h3>Profile</h3>
            <ProfileInfo updateUserStatus={props.updateUserStatus}
                         status={props.status}
                         getUsersProfile={props.getUsersProfile}
                         profile={props.profile} />
            <MyPostsContainer  />


        </div>


    )
}