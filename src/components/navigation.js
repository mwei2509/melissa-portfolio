import React from 'react'
import { goToAnchor, goToTop, configureAnchors } from 'react-scrollable-anchor'

configureAnchors({offset: -65, scrollDuration: 400})

const Navigation = (props) => {
  console.log(props.history.location.hash)
  return (
    <div className="navigation">
      <ul>
        <li onClick={(e)=>{
            props.history.push('/')
            goToAnchor('single')}} id="logo"><img src="http://i.imgur.com/GX9rpKw.png" alt="logo" width={"auto"} height={20}/></li>
        <li></li>
        <li style={props.history.location.hash==="#projects" ? {borderBottom: "15px solid #4caf50"}:null} onClick={(e)=>goToAnchor('projects', true)} className="menu-item green">Projects</li>
        <li style={props.history.location.hash==="#portfolio" ? {borderBottom: "15px solid #ffeb3b"}:null} onClick={(e)=>goToAnchor('portfolio', true)} className="menu-item yellow">Portfolio</li>
        <li style={props.history.location.hash==="#about" ? {borderBottom: "15px solid #03a9f4"}:null} onClick={(e)=>goToAnchor('about', true)} className="menu-item blue">About</li>
        <li className="menu-item green"><a href="https://whatsthatwei.tumblr.com/" style={{color: "#000"}}>Blog</a></li>
      </ul>
    </div>
  )
}

export default Navigation;
