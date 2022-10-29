import React, { Component } from 'react'
import Navbar from "./components/Navbar";
import News from "./components/News";
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
import Toploadbar from './components/Toploadbar';


export default class App extends Component {
  state={progress:"10"};
  apikey=process.env.REACT_APP_NEWS_API
  setprogress=(percentage)=>{
    this.setState({progress:percentage})
  }
  render() {
    return (
      <>
      <Toploadbar progress={this.state.progress}/>
      <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<News apikey={this.apikey} setprogress={this.setprogress} key="general"  country="in" category="general" pagesize="21"/>}></Route>
        <Route exact path="/business" element={<News  apikey={this.apikey} setprogress={this.setprogress}key="business" country="in" category="business" pagesize="21"/>}></Route>
        <Route exact path="/entertainment" element={<News apikey={this.apikey}  setprogress={this.setprogress}key="entertainment" country="in" category="entertainment" pagesize="21"/>}></Route>
        <Route exact path="/health" element={<News apikey={this.apikey}  setprogress={this.setprogress}key="health" country="in" category="health" pagesize="21"/>}></Route>
        <Route exact path="/science" element={<News apikey={this.apikey}  setprogress={this.setprogress}key="science"  country="in" category="science" pagesize="21"/>}></Route>
        <Route exact path="/sports" element={<News apikey={this.apikey}  setprogress={this.setprogress}key="sports"  country="in" category="sports" pagesize="21"/>}></Route>
        <Route exact path="/technology" element={<News apikey={this.apikey}  setprogress={this.setprogress}key="technology" country="in" category="technology" pagesize="21"/>}></Route>
      </Routes>
      </Router>
      </>
    )
  }
}
