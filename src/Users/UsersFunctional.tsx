import React from "react";
import {NavLink} from "react-router-dom";
import {UsersMapsType} from "./UsersClassContainer";
import {followThunk, unfollowThunk} from "../Redux/users-reducer";
import styles from './Users.module.css'




type OnChangeType = {
    onPageChange: (numberPage: number) => void

}


export const UsersFunctional = (props: UsersMapsType & OnChangeType) => {
    let pageCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (<div>
        <div>
            {
                pages.map(p => {
                    return <span
                        onClick={(e) => {
                            props.onPageChange(p)
                        }}>{p}</span>
                })
            }
        </div>
        {
            props.users.users.map(u => <div key={u.id}>
                <span>

                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small: "" }
                        className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.InProgress.some(id => id === u.id)} onClick={() => {
                                unfollowThunk(u.id)


                            }}>UnFollow</button>

                            : <button disabled={props.InProgress.some(id => id === u.id)} onClick={() => {

                                followThunk(u.id)


                            }}>Follow</button>
                        }

                    </div>


                </span>
                    <span>
                    <div>{u.followed}</div>
                    <div>{u.status}</div>
                </span>
                  {/*  <span><div>{u.location.city}</div>
                     <div>{u.location.country}</div>

                </span>*/}
                </div>
            )
        }

    </div>)
}

