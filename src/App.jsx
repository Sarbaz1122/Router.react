import React from 'react'
import Home from './Compo/Home/home.jsx';
import About from './Compo/About/about.jsx'; 
import Contact from './Compo/Contact/contact.jsx';
import Error from './Compo/Error/error.jsx';

 

 
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
{
  /* The following line can be included in your src/index.js or App.js file */
}
function App() {
  return (
<Router>

    <div>
    <h1>hi ahmad</h1>
      <Link to={'/'} >Home</Link>
      <Link to={'/About'} >About</Link>
      <Link to={'/Contact'} >Contact</Link>



      <Routes>


        <Route path='/' element={<Home/>}/>
        
        <Route path='/about' element={<About/>}/>
      
       <Route path='/contact' element={<Contact/>}/>

       <Route path='*' element={<Error/>}/>
         {/* error parts */}
         <Route path="*" element={<Error />} />

      </Routes>
      


    </div>
    </Router>

  )
}

export default App