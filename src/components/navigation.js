import React, { Component } from 'react'

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li id="logo">Melissa Wei</li>
        <li></li>
        <li className="menu-item green"><a href="#projects">Projects</a></li>
        <li className="menu-item yellow">Portfolio</li>
        <li className="menu-item blue"><a href="#about">About</a></li>
      </ul>
    </div>
  )
}

export default Navigation;
