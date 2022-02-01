import React from 'react';
import ReactDOM  from 'react-dom';
import './app.css'
import Card from './HomeScreen/Card'
import data from './HomeScreen/data'
import Navbar from './HomeScreen/Navbar';
import Pagination from './HomeScreen/Pagination';
import Footer from './HomeScreen/Footer';

const App = () => {
  return (
      <>
        <Navbar />
        {data.map((val)=>{
            return(
                <Card 
                    image={val.image}
                    title = {val.title}
                    sname ={val.sname}   

                />
            )
        })}

        <Pagination/>

        <div className="container bottom">
        <h2 style={{color:"#834DA4"}}>  Sign up for The Tide,<span style={{color:"#D7B065"}}>Digirack </span> newsletter!</h2>
          <p className='sign-desc' >Sign up to re
           and trends we're seeing in the space.</p>

      <div>  <input className='emailAddress' placeholder='Enter your Email/Phone Number'  type="email"/></div>

        <button className='sign-up'>Sign Up</button>
        </div>


        <Footer />
      
      </>
  );
};

export default App;
