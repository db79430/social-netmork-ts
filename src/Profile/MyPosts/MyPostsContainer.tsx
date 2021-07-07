import React from "react";
/*import {MyPostsType} from "../../Redux/store";*/
import {
    addActionCreater,
    addUPDATEActionCreater,
    InitialStatePostType
} from "../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";

export type MyPostsType = {
    message: string;
    id: number;


}


type MapStateToPropsType = {
    messagesPost: Array<MyPostsType>
    messageNewPostText: string;

}

type MapDispatchToPropsType = {
    addActionCreater: (postText: string) => void
    addUPDATEActionCreater : (newText: string) => void
}




let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    console.log(state)
    return {
        messagesPost: state.post.postPage.messagesPost,
        messageNewPostText: state.post.postPage.messageNewPostText


    }
}


 export const MyPostsContainer = connect(mapStateToProps, {addUPDATEActionCreater,addActionCreater})(MyPosts)





