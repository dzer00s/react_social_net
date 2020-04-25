import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  { id: 1, message: 'your photo amazing', like: '10' },
  { id: 2, message: 'thx Marie', like: '2' }
]

let dialogsData = [
  { id: 1, name: 'Egor' },
  { id: 2, name: 'Marie' },
  { id: 3, name: 'Sophie' },
  { id: 4, name: 'Willey' }
]
let messagesData = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'what do you do?' },
  { id: 3, message: 'make pizza' },
  { id: 4, message: 'great' }
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
