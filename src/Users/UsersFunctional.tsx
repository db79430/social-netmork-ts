import React from "react";
import ava from "../img/ava.png"
import {NavLink} from "react-router-dom";
import {UsersMapsType} from "./UsersClassContainer";
import {getFollowUsers, getUnFollowUsers, getUsers} from "../api/API";
import {followThunk, unfollowThunk} from "../Redux/users-reducer";

type OnChangeType = {
    onPageChange: (numberPage: number) => void
}


export const UsersFunctional = (props: UsersMapsType & OnChangeType) => {
    let pageCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {
                pages.map(p => {
                    return <span /*className={props.currentPage === p && s.selectPage}*/
                        onClick={(e) => {
                            props.onPageChange(p)
                        }}>{p}</span>
                })
            }
        </div>
        {
            props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={ava}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.InProgress.some(id => id === u.id)} onClick={() => {
                                followThunk(u.id)


                            }}>UnFollow</button>
                                // props.toggleIsFollowing(true)
                                //
                                // getFollowUsers().then(data => {
                                //     if (data.resultCode === 0) {
                                //         props.follow(u.id)
                                //
                                //     }
                                //     props.toggleIsFollowing(false)
                                // })

                            : <button disabled={props.InProgress.some(id => id === u.id)} onClick={() => {
                                // props.toggleIsFollowing(true)
                                //
                                //
                                // getUnFollowUsers().then(response => {
                                //     if (response.data.resultCode === 0) {
                                //         props.unfollow(u.id)
                                //
                                //     }
                                //     props.toggleIsFollowing(false)
                                // })
                                unfollowThunk(u.id)



                            }}>Follow</button>
                        }

                    </div>


                </span>
                    <span>
                    <div>{u.followed}</div>
                    <div>{u.status}</div>
                </span>
                    <span>
                    <div>{u.location.city}</div>
                     <div>{u.location.country}</div>
                </span>
                </div>
            )
        }

    </div>
}

