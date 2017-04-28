import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { goToAnchor } from 'react-scrollable-anchor'

class Project extends Component {

  handleClick(){
    this.props.history.push(this.props.project.path)
    goToAnchor('single')
  }
  render(){
    const {project} = this.props

    const projDiv = <div className="project-meta">
      <div className="info">
        <h4><Link to={project.path}>{project.name}</Link></h4>
        <p>{project.about.substring(0,70)+"..."}</p>
      </div>
      <div className="links">
        <a className="button">
          View Details
        </a>
      </div>
    </div>

    const projectStyle={
      background: `url(${project.thumbnail})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
      // borderRadius: 20
    }
    return(
      <div onClick={this.handleClick.bind(this)} className="project-main" style={projectStyle}>
        {projDiv}
      </div>
    )
  }
}

export default Project
