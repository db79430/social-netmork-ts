import React from "react";
/*import {MyPostsType} from "../../Redux/store";*/
import {
    addActionCreater,
    addUPDATEActionCreater,
    InitialStatePostType
} from "../../Redux/post-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";

export type MyPostsType = {
    message: string;
    id: number;


}


type MapStateToPropsType = {
    messagesPost: Array<MyPostsType>
    messageNewPostText: string;

}

/*export type MessagePosts = {
    messagesPost: Array<MyPostsType>
    addPostMessage: (postText: string) => void

    messageNewPostText: string;
    /!*onPostChange: (newText: string) => void*!/
    store: StoreType
    dispatch: (action: ActionAddPostType | ActionUpdatePostType) => void
    state: RootStateType


}*/

type MapDispatchToPropsType = {
    addUPDATE: () => void
    addAction: (messageNewPostText: string) => void
}


/*export const MyPostsContainer = (props: MessagePosts) => {
    let state = props.store.getState()


    let postElement = props.messagesPost
        .map(p => <Post key={p.id} message={p.message}/>)

    /!* let newPostElement = React.createRef<HTMLTextAreaElement>()*!/
    let addButtonClick = () => {
        /!* if (newPostElement.current)*!/
        {
            /!* props.store.addPostMessage(props.messageNewPostText)*!/
            props.store.onPostChange('')


        }


    }


    let onPostChangeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {

        /!*const text = postElement.current.value;*!/
        props.store.onPostChange(e.currentTarget.value)
        /!*props.dispatch(addActionCreater(props.messageNewPostText))*!/
        let action = addUPDATEActionCreater(props.messageNewPostText)
        props.dispatch(action)


    }

    return (
        <MyPosts
            messagesPost={props.messagesPost} addPostMessage={props.addPostMessage}
            store={props.store}
            messageNewPostText={props.messageNewPostText}
            dispatch={props.dispatch}

        />
    )
}*/

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    console.log(state)
    return {
        messagesPost: state.post.postPage.messagesPost,
        messageNewPostText: state.post.postPage.messageNewPostText


    }
}

let mapDispatchToProps = (dispatch: any): MapDispatchToPropsType => {
    return {
        addUPDATE: () => {
            dispatch(addUPDATEActionCreater)
        },
        addAction: (messageNewPostText: string) => {
            dispatch(addActionCreater(messageNewPostText))
    }


    }
}

 export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)





