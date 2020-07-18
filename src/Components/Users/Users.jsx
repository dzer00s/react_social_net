import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/icon_user.png';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={
                    props.currentPage === p && s.selectedPage}
                    onClick={(e) =>
                        props.onChanged(p)}>{p} </span>
            })}
        </div>
        {

            props.users.map(u => <div key={u.id}>

                <div>
                    <div className={s.userPhoto}>
                        <NavLink to={'/profile/' + u.id} >
                            <img className={s.userPhotoborder} src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                Axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "928fceb4-7d35-408d-b482-6211aa706980"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.setUnfollow(u.id);
                                        }
                                    });
                            }
                            }>Unfollow</button>

                            : <button onClick={() => {
                                Axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "928fceb4-7d35-408d-b482-6211aa706980"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.setFollow(u.id);
                                        }
                                    });

                            }}>follow</button>
                        }
                    </div>
                </div>
                <div>
                    <div>
                        <div> {u.name}</div>
                        <div> {u.status}</div>
                    </div>
                    <div>
                        <div>Nextgen</div>
                        <div>----</div>
                    </div>
                </div>
            </div>
            )}
    </div>
}


export default Users;