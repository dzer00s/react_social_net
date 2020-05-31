import React from 'react';
import s from './Users.module.css';



let Users = (props) => {
    if (props.users.length === 0) {
        props.set_users([
            { id: 1, photoUrl: 'https://yt3.ggpht.com/a/AATXAJzvNFhoeZDnngYlAKM7K3Wy0VYf75dg5xE8sg=s900-c-k-c0xffffffff-no-rj-mo', followed: false, fullName: 'Kamil', status: 'yeah', location: { city: 'Kazan', country: 'Russia' } },
            { id: 2, photoUrl: 'https://yt3.ggpht.com/a/AATXAJzvNFhoeZDnngYlAKM7K3Wy0VYf75dg5xE8sg=s900-c-k-c0xffffffff-no-rj-mo', followed: true, fullName: 'Alexander', status: 'not designer', location: { city: 'Kazan', country: 'Russia' } },
            { id: 3, photoUrl: 'https://yt3.ggpht.com/a/AATXAJzvNFhoeZDnngYlAKM7K3Wy0VYf75dg5xE8sg=s900-c-k-c0xffffffff-no-rj-mo', followed: false, fullName: 'Andrew', status: 'i man', location: { city: 'Kazan', country: 'Russia' } }
        ])
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <div>
                    <div className={s.userPhoto}>
                        <img className={s.userPhotoborder} src={u.photoUrl} alt="" />
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
                        <div> {u.fullName}</div>
                        <div> {u.status}</div>
                    </div>
                    <div>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </div>
                </div>
            </div>
            )}
    </div>
}

export default Users;