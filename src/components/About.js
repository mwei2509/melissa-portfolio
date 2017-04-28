import React, { Component } from 'react'
import {AboutInfo} from '../content/about'
import FontAwesome from 'react-fontawesome'

class About extends Component {
  render(){
    return(
      <div className="about-wrapper">
        <div></div>
        <div id="about-photo">
          <img src={AboutInfo.photo} />
        </div>
        <div id="about-me">
          {AboutInfo.bio.split("\n\n").map((par, index)=>{
              return <p key={index}>{par}</p>
            })}
            <span><a href={AboutInfo.contact.github}><FontAwesome name="github-square" size="2x" /></a></span>
            <span><a href={AboutInfo.contact.linkedin}><FontAwesome name="linkedin-square" size="2x" /></a></span>
            <span><a href={AboutInfo.contact.blog}><FontAwesome name="tumblr-square" size="2x" /></a></span>
            <span><a href={AboutInfo.contact.codepen}><FontAwesome name="codepen" size="2x" /></a></span>
            <span><a href={AboutInfo.contact.resume}><FontAwesome name="file-pdf-o" size="2x" /></a></span>
            <p>Email: {AboutInfo.contact.email}</p>
        </div>
        <div></div>
      </div>
    )
  }
}

export default About
