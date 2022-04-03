import React, { Component } from 'react';

const Navbar = ({lenth}) => {
    return (
    <nav className="navbar navbar-light bg-light">
    <div className="container-fluid">
      <span className="navbar-brand mb-0 h1">Navbar
      <span className="badge bg-secondary m-2">{lenth}</span>
      </span>
    </div>
    </nav>
    );
}
 
export default Navbar;

