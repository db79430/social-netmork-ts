import React from "react";
import {NavLink} from "react-router-dom";
import {UsersMapsType} from "./UsersClassContainer";
import {followThunk, setCurrentPageAC, unfollowThunk} from "../Redux/users-reducer";
import styles from './Users.module.css'
import {Paginator} from "../common/Paginator/Paginator";






export const UsersFunctional = (props: UsersMapsType) => {


    return (<div>
        <div>
            <Paginator  portionNumber={props.portionNumber}
                        portionSize={props.portionSize}
                        getUsersData={props.getUsersData}
                        unfollowThunk={props.unfollowThunk}
                        followThunk={props.followThunk}
                        getUsersThunkCreater={props.getUsersThunkCreater}
                        InProgress={props.InProgress}
                        toggleIsFollowing={props.toggleIsFollowing}
                        isFetching={props.isFetching}
                        toggleIsFetching={props.toggleIsFetching}
                        unfollow={props.unfollow}
                        setUsers={props.setUsers}
                        setTotalCounters={setCurrentPageAC}
                        setCurrentPages={props.setCurrentPages}
                        follow={props.follow}
                        currentPage={props.currentPage}
                        pageSize={props.pageSize}
                        users={props.users}
                        totalCount={props.totalCount}
                        onPageChange={props.onPageChange}/>
        </div>

        {
            props.users.map(u => <div key={u.id}>
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
                   </div>
            )
        }

    </div>)
}

