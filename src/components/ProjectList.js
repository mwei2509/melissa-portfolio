import React, { Component } from 'react'
import {ProjectData} from '../content/projectdata'
import Project from './Project'

class ProjectList extends Component {
  render() {
    return (
      <div className="project-list">
        {ProjectData.map((project, index)=>{
          return <div className="single-project">
            <Project project={project}/>
          </div>
        })}
      </div>
    )
  }
}

export default ProjectList;
