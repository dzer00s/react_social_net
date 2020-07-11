import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/icon_user.png';

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
                        <img className={s.userPhotoborder} src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>

                            : <button onClick={() => {
                                props.follow(u.id)
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
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </div>
                </div>
            </div>
            )}
    </div>
}


export default Users;