import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from 'assets/logo.svg';
import { getUserAsync, selectUser } from './userSlice';
import { selectMessage } from '../home/homeSlice';
import './style.scss';

export default function User() {
  const user = useSelector(selectUser);
  const message = useSelector(selectMessage);
  const dispatch = useDispatch();
  dispatch(getUserAsync());

  return (
    <div className="user">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/">
          <h1 className="App-title">Welcome to React</h1>
        </Link>
      </header>
      <p className="App-intro">
        To get started, edit
        <code className="App-code">src/views/user/index.js</code>
        and save to reload.
      </p>
      <p className="App-intro">{message}</p>
      <p className="App-intro">{user}</p>
    </div>
  );
}
