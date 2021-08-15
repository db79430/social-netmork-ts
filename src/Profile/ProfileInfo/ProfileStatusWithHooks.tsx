import React, {ChangeEvent, useEffect, useState} from "react";


type ProfileStateType = {
    updateUserStatus: (status: string) => void
    status: string

}


export const ProfileStatusWithHooks = (props: ProfileStateType) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(()=> {
        setStatus(props.status)
    }, [props.status]);
    const activeMode = () => {
        setEditMode(true)

    }
    const deactivateEditMode = () => {
        setEditMode(false)

    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
        props.updateUserStatus(status)
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activeMode}>{props.status || '-------'}</span>
            </div>

            }
            {editMode &&
            <div>
                <input onChange={onStatusChange}
                       autoFocus={false}
                       onBlur={deactivateEditMode}
                       value={status}/>
            </div>
            }
        </div>
    )


}