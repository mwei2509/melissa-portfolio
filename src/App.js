import React, { Component } from 'react'
import ProjectList from './components/ProjectList'
import PlaygroundList from './components/PlaygroundList'
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
                <div className="section">
                  <h1 style={{color: "#fff", fontFamily: "Lobster",
                    fontSize: 60,
                    textShadow: "1px 1px 1px #000", width: "100%", textAlign: "center", zIndex: 10}}>Projects</h1>
                  <ProjectList history={this.props.history}/>
                  </div>
              </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={'playground'}>
              <div className="division orange-gradient">
                <div className="section" style={{minHeight: "80vh"}}>
                  <h1 style={{color: "#fff", fontFamily: "Lobster",
                    fontSize: 60,
                    textShadow: "1px 1px 1px #000", width: "100%", textAlign: "center", zIndex: 10}}>Playground</h1>
                  <PlaygroundList history={this.props.history}/>
                  </div>
              </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={'about'}>
              <div className="division red-gradient">
                <div className="section" style={{minHeight: "100vh"}}>
                  <h1 style={{color: "#fff", fontFamily: "Lobster",
                    fontSize: 60,
                    textShadow: "1px 1px 1px #000", width: "100%", textAlign: "center", zIndex: 10}}>About Melissa</h1>
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
