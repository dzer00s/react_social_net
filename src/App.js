import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/Navbar/Nav';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
// import { updateNewPostText } from './redux/state';

const App = (props) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar state={props.state.SideBar} />
      <div className='app-wrapper-content'>
        <Route path='/profile'
          render={() => <Profile
            ProfilePage={props.state.ProfilePage}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText} />} />
        <Route path='/dialogs' render={() => <Dialogs
          state={props.state.DialogsPage} />} />


        <Route path='/music' render={() => <Music />} />
        <Route path='/settings' render={() => <Settings />} />
      </div>
    </div>
  );
}

export default App;
