import React, { Component } from 'react'
import ProjectList from './components/ProjectList'
import Navigation from './components/navigation'
import About from './components/About'
import ScrollableAnchor from 'react-scrollable-anchor'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <ScrollableAnchor id={'projects'}>
          <div style={{paddingTop: 50}}>
            <h1>Projects</h1>
            <ProjectList />
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'about'}>
          <div style={{background: "#eee", paddingTop: 50,height: 1000}}>
            <h1>About Me</h1>
            <About />
          </div>
        </ScrollableAnchor>
      </div>
    );
  }
}

export default App;
