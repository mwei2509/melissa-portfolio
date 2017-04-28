import React, { Component } from 'react'
import {PlaygroundData} from '../content/experiments'
import Project from './Project'
import FontAwesome from 'react-fontawesome'
import { goToAnchor } from 'react-scrollable-anchor'

class PlaygroundList extends Component {


  render() {

    return (
      <div className="project-list">
        {PlaygroundData.map((project, index)=>{
         let playgroundStyle={
            display: "block",
            background: `url(${project.thumbnail})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
            // borderRadius: 20
          }

          return <div key={index} className="single-project">
            <a href={project.demo} className="project-main" style={playgroundStyle}>
              <span className="playground-list">
                <h2>{project.name}</h2>
                <p>{project.desc}</p>
              </span>
            </a>
          </div>
        })}
      </div>
    )
  }
}

export default PlaygroundList;
