import React, { Component } from 'react'
import {Parallax} from 'react-parallax'

class SingleDetails extends Component{
  render(){
    const {project} = this.props
    return(
      <div style={{minHeight: "100vh", paddingTop: 15, paddingBottom: 5}}>
        <div className="project">
          <div className="project-left">
            <h2 className="project-title">{project.name}</h2>
            <p><small>Completed on {project.date}</small></p>
            <p><strong>Stack: </strong>{project.stack.join(", ")}</p>
            {project.long_desc.split("\n\n").map((par, index)=>{
                return <p key={index}>{par}</p>
              })}
            <p>
              <a className="button">Demo</a>
              <a className="button">View on Github</a>
            </p>
          </div>
          <div className="project-right">
            {project.photos.filter((photo)=>{return photo.feature}).map((photo, index)=>{
              return (
                <div key={index} className="feature-group">
                  <div className="feature-desc"><p>{photo.desc}</p></div>
                  <div className="feature-img"><img src={photo.url} alt="" width={"100%"}/></div>
              </div>)
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default SingleDetails
