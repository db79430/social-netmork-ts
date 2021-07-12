import React from "react";
import {
    addActionCreater,
} from "../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";


export type MyPostsType = {
    message: string;
    id: number;


}


type MapStateToPropsType = {
    messagesPost: Array<MyPostsType>

}

/*type MapDispatchToPropsType = {
    addActionCreater: (postText: string) => void
    addUPDATEActionCreater : (newText: string) => void
}*/




let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        messagesPost: state.post.postPage.messagesPost,
    }
}


 export const MyPostsContainer = connect(mapStateToProps, {addActionCreater})(MyPosts)





