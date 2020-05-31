import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/Navbar/Nav';
import Profile from './Components/Profile/Profile';
import { Route, BrowserRouter } from 'react-router-dom';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar state={props.state.SideBar} />
      <div className='app-wrapper-content'>

        <Route path='/profile'
          render={() => <Profile />} />

        <Route path='/dialogs'
          render={() => <DialogsContainer />} />

        <Route path='/users'
          render={() => <UsersContainer />} />


        <Route path='/music' render={() => <Music />} />
        <Route path='/settings' render={() => <Settings />} />
      </div>
    </div>
  );
}

export default App;
