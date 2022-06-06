import React from 'react';
import './Header.css';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOut } from '@fortawesome/free-solid-svg-icons';

interface IHeaderProps {
  collapsed: boolean;
}

function Header(props: IHeaderProps) {
  if (props.collapsed) {
    return (
      <div className="Header">
        <div className="container">
          <div className="Header-row">
            <div className="Header-burger">
              <span></span>
            </div>
            <div>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="Header-username username">
              <p>Username</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Header Header-active">
        <div className="container">
          <div className="Header-row">
            <div className="Header-burger-active Header-burger ">
              <span></span>
            </div>
          </div>
          <ul className="Header__list">
            <li className="Header__ul">All posts</li>
            <li className="Header__ul">My posts</li>
            <li className="Header__ul">Add posts</li>
            <li className="Header__ul">
              Log out <FontAwesomeIcon icon={faSignOut} />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
