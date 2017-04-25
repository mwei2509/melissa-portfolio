import React, { Component } from 'react'

class Project extends Component {
  constructor(){
    super()
  }

  render(){
    const {project} = this.props

    const projectStyle={
      background: `url(${project.mainphoto})`,
      backgroundSize: "cover",
      width: "auto",
      height: "100%"
    }
    return(
      <div className="project-main" style={projectStyle}>
        <div className="project-meta">
          <h4>{project.name}</h4>
          <p>{project.about}</p>
          <div className="links">
            <button>
              Demo
            </button>
            <button>
              View on Github
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Project
