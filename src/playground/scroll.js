import React, { Component } from 'react';

class Scroll extends Component {
  constructor(){
    super()
    this.state={
      position: 0
    }
  }

  componentWillMount(){
    window.addEventListener('scroll',(e)=>{
      this.setState({
        position: window.scrollY
      })
    })
  }

  render() {

    // RGB: {this.state.position<=255 ? this.state.position : 255},{this.state.position <= 255 ? 0 : ((this.state.position>255&&this.state.position<=510) ? (this.state.position-255) : 255)},{this.state.position<=510 ? 0 : ((this.state.position > 510 && this.state.position < 765) ? this.state.position - 510 : 255)}
    const randomDiv=<div style={{height: "100vh", width: "100vw", opacity: (this.state.position-300)*.001, color: "#fff"}}><h1>Hello, World!</h1></div>

    const numslides=3
    const minHeight=window.innerHeight*(numslides-1)
    const docHeight=window.innerHeight * numslides
    const scrollHeight=window.innerHeight * (numslides+1)
    const singleSlide = scrollHeight/(numslides+1)
    const currentIndex= Math.floor(this.state.position/singleSlide)
    const percent = Math.floor(((this.state.position/singleSlide+0.01)-currentIndex)*100)
    const fixStyle = {position: "fixed", width: "100vw", height: "100vh", background: `rgba(151,203,191,${percent*0.01})`}
    const normalStyle={position: "relative", marginTop: docHeight, width: "100vw", height: "100vh", background: "rgba(151,203,191,1)"}

    const h1Style={
      color: "#fff", textShadow: "2px 2px 9px rgba(0,0,0,0.5)", textAlign: "center", fontSize: 100, width: "100%"
    }
    const h2Style={
      color: "#fff", textShadow: "2px 2px 9px rgba(0,0,0,0.5)", textAlign: "center", fontSize: 50, width: "100%"
    }
    const pStyle={
      color: "#fff", textShadow: "2px 2px 9px rgba(0,0,0,0.5)", textAlign: "center", fontSize: 40, width: "100%"
    }
    const slides = [
      {slide: <div><h1 style={h1Style}>Hello!</h1><p style={pStyle}>Welcome to this demo.  <br />Keep scrolling down to see the page transition.</p></div>},
      {slide: <div><h1 style={h1Style}>Oh look!</h1><p style={pStyle}>What have we here?  A second page?  Keep going...</p></div>},
      {slide: <div><h1 style={h1Style}>Finally</h1><p style={pStyle}>We have reached our destination... or have we?</p></div>}]

    return (
      <div style={{height: minHeight}}>
        <div style={this.state.position < docHeight ? fixStyle : normalStyle}>
          <span style={{height: 40, background: "rgba(244,214,94,1)", zIndex: 1, color: "#fff", display: "block", width: `${percent}%`}}>{percent}%</span>
          {currentIndex < 3 ? slides[currentIndex].slide : slides[2].slide}
          <div style={{margin: 10, position: "fixed", margin: "auto"}}>
            <span onClick={()=>{window.scrollTo(0,1)}} style={{display: "block", margin: 10, height: 20, width: 20, borderRadius: 10, background: currentIndex==0 ? "#555" : "#fff", border: "1px solid #000"}}></span>
            <span onClick={()=>{window.scrollTo(0,singleSlide)}} style={{display: "block", margin: 10, height: 20, width: 20, borderRadius: 10, background: currentIndex==1 ? "#555" : "#fff", border: "1px solid #000"}}></span>
            <span onClick={()=>{window.scrollTo(0,singleSlide*2)}} style={{display: "block", margin: 10, height: 20, width: 20, borderRadius: 10, background: currentIndex==2 ? "#555" : "#fff", border: "1px solid #000"}}></span>
          </div>
          <div style={{position: "absolute", background: "#fff", bottom: 50, left: 50, padding: 20, border: "1px solid #000"}}>
            <p>Doc height: {docHeight}</p>
            <p>Slide height: {singleSlide}</p>
            <p>Index: {currentIndex}</p>
            <p>Percent: {percent}</p>
            <p>current: {this.state.position}</p>
          </div>
        </div>
        <div style={{background: "linear-gradient(180deg, rgba(151,203,191,1), rgba(244,214,94,1))", padding: 0, margin: 0, height: "100vh", width: "100vw", position: "absolute", top: scrollHeight}}>
          <h2 style={h2Style}>Ha, tricked you, I'm another div!<br />...with a scribble</h2>
          <div style={{width: 600, margin: "auto"}}>
            <svg stroke={"black"} viewBox={"0 0 500 600"} preserveAspectRatio={"xMidYMid meet"} height={400} width={600} xmlns="http://www.w3.org/2000/svg">
              <g transform={"scale(2)"}>
              <path style={{strokeDasharray: `${500}`, strokeDashoffset: this.state.position, fill: "none", strokeWidth: "2px"}} d={`M21,48l0,-1l0,-1l0,-1l0,-1l0,-1l0,-1l1,-1l0,-1l2,-1l1,-1l1,0l1,-1l1,-1l1,0l1,-1l1,0l1,0l1,-1l1,0l1,0l1,0l1,0l1,0l1,0l1,0l1,0l1,0l1,2l1,1l1,1l0,1l0,1l1,1l0,1l0,1l0,1l0,1l0,1l0,1l0,1l0,2l-1,2l-1,1l0,1l-1,1l-1,1l-1,2l-1,0l-1,1l-1,1l-1,1l-1,1l-1,0l0,1l-1,1l-1,1l-1,0l-1,1l-1,0l-1,0l-1,1l-1,0l-1,0l-1,0l-1,0l0,-1l0,-1l0,-1l0,-1l0,-1l0,-1l1,-1l1,-1l1,-1l1,-1l2,-1l1,0l1,-1l2,0l1,-1l1,0l1,0l1,0l1,0l1,0l1,0l1,0l1,0l1,0l1,0l1,1l1,0l1,1l1,1l1,0l1,1l1,1l1,0l0,1l1,0l1,1l1,0l1,1l1,0l1,0l1,0l1,0l1,0l1,0l1,-1l2,-1l1,-1l1,-2l1,-1l2,-2l1,-2l1,-2l1,-2l1,-2l0,-2l1,-2l0,-1l0,-1l0,-2l0,-1l0,-1l0,-1l-1,-1l-1,0l-2,-1l-1,0l-2,-1l-2,0l-1,-1l-2,0l-2,0l-1,-1l-2,0l-1,0l-1,0l-1,0l-1,0l-1,0l0,1l0,1l0,2l0,2l0,1l0,2l1,1l0,2l1,1l1,1l0,2l1,1l1,2l1,2l1,1l1,1l0,2l1,1l0,1l1,1l0,1l0,1l1,1l0,1l0,1l0,1l0,1l0,1l0,1l0,1l-1,0l-1,1l0,1l-1,0l-1,1l-1,0l-1,0l0,1l-1,0l-1,0l-1,0l-1,0l-1,-1l0,-1l-1,-1l0,-1l-1,-1l0,-2l0,-2l0,-1l0,-2l0,-2l0,-1l2,-1l1,-2l1,-1l0,-1l2,-1l1,0l1,-1l1,0l1,-1l1,0l2,0l1,-1l2,0l2,0l1,0l2,-1l3,0l2,0l2,0l2,0l2,-1l2,0l4,-1l1,-1l2,0l2,-1l1,0l1,-1l2,-1l1,-1l1,0l1,-1l1,-1l1,-1l1,-1l1,-1l0,-1l1,-1l0,-1l0,-1l0,-1l0,-1l0,-1l0,-1l-1,-1l-2,-1l-1,-1l-1,0l-2,-1l-1,-2l-2,0l-1,-1l-2,-1l-1,0l-2,-1l-2,0l-1,0l-1,0l-1,0l0,1l0,1l1,1l1,1l2,2l1,2l1,0l3,3l2,1l2,2l2,2l2,1l2,2l2,2l2,2l2,2l1,1l2,2l1,1l1,1l1,1l0,1l1,1l1,1l0,1l-1,1l-1,0l-1,0l-1,0l-1,0l-1,0l-2,0l-1,0l-1,0l-1,-1l-1,-1l-1,-1l-1,-1l0,-2l-1,-1l0,-2l0,-2l0,-2l0,-2l0,-1l0,-2l0,-1l1,-1l1,-1l1,-1l1,0l1,-1l2,0l1,-1l2,0l1,0l1,0l1,-1l1,0l1,0l1,-1l1,-1l1,0l0,-1l1,-1l1,-1l0,-1l0,-1l0,-2l0,-1l0,-1l-1,-1l0,-1l-2,0l-1,-1l-1,0l-1,0l-1,-1l-1,0l-2,0l-1,0l-1,0`}/>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default Scroll;
