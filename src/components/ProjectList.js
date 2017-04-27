import React, { Component } from 'react'
import {ProjectData} from '../content/projectdata'
import Project from './Project'

class ProjectList extends Component {

  render() {
    return (
      <div className="project-list">
        {ProjectData.filter((proj, index)=>{return index!==0}).map((project, index)=>{
          return <div key={index} className="single-project">
              <Project project={project} history={this.props.history}/>
            </div>
        })}
      </div>
    )
  }
}

export default ProjectList;
