import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/Navbar/Nav';
import { Route, BrowserRouter } from 'react-router-dom';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar state={props.state.SideBar} />
      <div className='app-wrapper-content'>

        <Route path='/profile/:userId?'
          render={() => <ProfileContainer />} />

        <Route path='/dialogs'
          render={() => <DialogsContainer />} />

        <Route path='/users'
          render={() => <UsersContainer />} />

        <Route path='/settings' render={() => <Settings />} />
      </div>
    </div>
  );
}

export default App;
