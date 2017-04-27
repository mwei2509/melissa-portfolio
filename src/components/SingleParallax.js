import React, { Component } from 'react'
import {Parallax} from 'react-parallax'
import FontAwesome from 'react-fontawesome'
import { goToAnchor } from 'react-scrollable-anchor'

class SingleParallax extends Component {

  render(){
    const {project}=this.props
    const mainStyle={
      // background: "none"
      background: "linear-gradient(180deg, rgba(151,203,191,0), rgba(151,203,191,1))"
    }

    const socialLinks=<p style={{textAlign: "center"}}>
      <a href={project.github} className="social"><FontAwesome name="github" /></a>
      <a href={project.linkedin} className="social"><FontAwesome name="linkedin" /></a>
    </p>

    const demoLinks=<p style={{textAlign: "center"}}>
      <a href={project.demo} className="button">Demo</a>
      <a href={project.github} className="button">View on Github</a>
    </p>

    const screenshots = <div className="screenshots" style={{display: "flex"}}>
      {project.photos.filter((photo)=>{return photo.header}).map((photo, index)=>{
        return <img src={photo.url} width={300} height={180} style={{margin: 5}}/>
      })}
    </div>

    return(
      <div>
        <Parallax bgImage={project.mainphoto} bgWidth={"100%"}
          bgHeight={"auto"}
          bgStyle={{backgroundPosition: "bottom"}}
          strength={400}
          className="parallax-container">
          <div style={{width: "100%", height: 0, paddingBottom: "48%"}}>
            <div style={project.path==="/" ? mainStyle : null} className="parallax-inner">
              <h1>{project.name}</h1>
                {project.about.split("\n\n").map((par, index)=>{
                    return <p key={index}>{par}</p>
                  })}
                {project.path==="/" ? socialLinks : demoLinks}
              <p><span onClick={project.path==="/" ? ()=>{goToAnchor("projects", true)}: ()=>{goToAnchor("maindetails")}}><FontAwesome name="sort-down" size="2x"/></span></p>
            </div>
          </div>
        </Parallax>
      </div>
    )
  }
}

export default SingleParallax
