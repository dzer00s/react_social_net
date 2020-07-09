import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/icon_user.png';



class UsersC extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.set_users(response.data.items);
        });
    }


    render() {

        let pagesCount = this.props.totalUsersCount / this.props.pageSize;
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return <div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p && s.selectedPage}>{p} </span>
                })}
            </div>
            {
                this.props.users.map(u => <div key={u.id}>

                    <div>
                        <div className={s.userPhoto}>
                            <img className={s.userPhotoborder} src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>

                                : <button onClick={() => {
                                    this.props.follow(u.id)
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
}





export default UsersC;