import React,{useState} from 'react';
import LoadingBar from 'react-top-loading-bar';
import './index.css';//tailwind css is loaded here
import NavBar from './Components/NavBar';
import NewsContainer from './Components/NewsContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App =(props)=>{
  const[progress,setProgress]=useState(0);
  
  
     // entertainment business general health science sports technology
    let pagesize = 9;
    return (
      <>
        <Router>
          <NavBar />
          <LoadingBar
            color='#2c6cb1'
            progress={progress}
          // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            {/* here we have to give unique key to Components for forced re-rendaring of components when user click on catagory */}
            {/* we are sending setProgress function as prop to NewsContainer */}
            <Route exact path='/' element={<NewsContainer setProgress={setProgress} key={1} category={'general'} pagesize={pagesize} />} />
            <Route exact path='/Sport' element={<NewsContainer setProgress={setProgress} key={2} category={'sports'} pagesize={pagesize} />} />
            <Route exact path='/Entertainment' element={<NewsContainer setProgress={setProgress} key={3} category={'entertainment'} pagesize={pagesize} />} />
            <Route exact path='/Business' element={<NewsContainer setProgress={setProgress} key={4} category={'business'} pagesize={pagesize} />} />
            <Route exact path='/Health' element={<NewsContainer setProgress={setProgress} key={5} category={'health'} pagesize={pagesize} />} />
            <Route exact path='/Science' element={<NewsContainer setProgress={setProgress} key={6} category={'science'} pagesize={pagesize} />} />
            <Route exact path='/Technology' element={<NewsContainer setProgress={setProgress} key={7} category={'technology'} pagesize={pagesize} />} />

          </Routes>
          {/* <Footer/> */}
        </Router>
      </>
    );
  
}
export default App;

// Api key :- 7a22bd931c5545fab1140dc40866431f