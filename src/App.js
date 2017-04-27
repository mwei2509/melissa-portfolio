import React, { Component } from 'react'
import ProjectList from './components/ProjectList'
import PortfolioList from './components/PortfolioList'
import Navigation from './components/navigation'
import About from './components/About'
import SingleParallax from './components/SingleParallax'
import SingleDetails from './components/SingleDetails'
import {ProjectData} from './content/projectdata'
import ScrollableAnchor from 'react-scrollable-anchor'
import {Route} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation history={this.props.history}/>
          <div>
            <ScrollableAnchor id={'single'}>
              <div className="division">
                {ProjectData.map((project, index)=>(
                  <Route key={index}
                      path={project.path}
                      exact={project.exact}
                      render={()=>{
                        return <div>
                              <SingleParallax project={project} />
                            </div>
                      }} />
                  ))}
              </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={'maindetails'}>
              <div className="division green-gradient">
                {ProjectData.filter((proj, index)=>{return index!==0}).map((project, index)=>(
                  <Route key={index}
                      path={project.path}
                      exact={project.exact}
                      render={()=>{
                        return <div className="section">
                              <SingleDetails project={project} />
                            </div>
                      }} />
                  ))}
              </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={'projects'}>
              <div className="division yellow-gradient">
                <div className="section" style={{padding: 30}}>
                  <h1 style={{color: "#fff", fontFamily: "Lobster",
                    fontSize: 60,
                    textShadow: "1px 1px 1px #000", width: "100%", textAlign: "center", zIndex: 10}}>Projects</h1>
                  <ProjectList history={this.props.history}/>
                </div>
              </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={'portfolio'}>
            <div className="division">
              <div className="section">
                <h1>Portfolio</h1>
                <PortfolioList history={this.props.history}/>
              </div>
            </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={'about'}>
              <div className="division">
                <div className="section">
                  <h1>About Melissa</h1>
                  <About />
                </div>
              </div>
            </ScrollableAnchor>
          </div>
      </div>
    );
  }
}

export default App;
