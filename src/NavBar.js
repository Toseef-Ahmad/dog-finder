import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
import { Route } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="NavBar-container">
          <NavLink
          exact
            to="/dogs"
            className="NavBar-links"
            activeStyle={{
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            Home
          </NavLink>
          {this.props.links.map((l) => (
            <NavLink
              to={'/dogs/' + l.name}
              className="NavBar-links"
              activeStyle={{
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              {l.name}
            </NavLink>
          ))}
        </div>
      </>
    );
  }
}

export default NavBar;
