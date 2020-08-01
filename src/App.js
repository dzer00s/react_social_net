import React from 'react';
import './App.css';
import NavBar from './Components/Navbar/Nav';
import { Route } from 'react-router-dom';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <NavBar state={props.state.SideBar} />
      <div className='app-wrapper-content'>

        <Route path='/profile/:userId?'
          render={() => <ProfileContainer />} />

        <Route path='/dialogs'
          render={() => <DialogsContainer />} />

        <Route path='/users'
          render={() => <UsersContainer />} />

        <Route path='/settings'
          render={() => <Settings />} />

        <Route path='/login'
          render={() => <Login />} />
      </div>
    </div>
  );
}

export default App;
