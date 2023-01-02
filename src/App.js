import React, { Component } from 'react';
import './index.css';//tailwind css is loaded here
import NavBar from './Components/NavBar';
import NewsContainer from './Components/NewsContainer';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
export default class App extends Component {
  render() {
    // entertainment business general health science sports technology
    return (
      <>
        <Router>
          <NavBar />
               
          <Routes>
            {/* here we have to give unique key to Components for forced re-rendaring of components when user click on catagory */}
            <Route exact path='/' element={<NewsContainer key={1} category={'general'} pagesize={9} />} />
            <Route exact path='/Sport' element={<NewsContainer key={2} category={'sports'} pagesize={9} />} />
            <Route exact path='/Entertainment' element={<NewsContainer key={3} category={'entertainment'} pagesize={9} />} />
            <Route exact path='/Business' element={<NewsContainer key={4} category={'business'} pagesize={9} />} />
            <Route exact path='/Health' element={<NewsContainer key={5} category={'health'} pagesize={9} />} />
            <Route exact path='/Science' element={<NewsContainer key={6} category={'science'} pagesize={9} />} />
            <Route exact path='/Technology' element={<NewsContainer key={7} category={'technology'} pagesize={9} />} />

          </Routes>
          <Footer/>
        </Router>
      </>
    );
  }
}

// Api key :- 8b20c3b93f15436f84dc5cda33e2629f