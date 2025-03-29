import React, { useEffect, useState } from "react"
// import  myImage from '../assets/images/New_Fitnes_Gym_logo_2_300x80.png'
import myImage from '../assets/images/fitangleLogoTwo-removebg-preview (1).png'
import { NavLink } from "react-router-dom"
import   Hamburger from '../assets/images/favicon-24x24.png'

// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'


const Navbar = () =>{

  const [showNavbar, setShowNavbar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

   // Listen to scroll events
   useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {  
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    return(

      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} style={{ overflow: 'hidden',position: 'fixed',zIndex: 4,top: 0,width:'100%'}}>
         <div className="container" >

           <div style={{display:'flex',alignItems:'center'}}>
             <div className="logo">
                <div style={{display:'inline-block'}}>
                  <h3 style={{ fontSize: '30px',fontWeight: 'bold',fontStyle: 'italic',fontVariant: 'small-caps',fontFamily: 'sans-serif',color:'white'}}>FIT</h3>
                </div> 

                <img height='90px' src={myImage} alt="Fit Angle"/>
                
                <div style={{display:'inline-block'}}>
                  <h3 style={{ fontSize: '30px',fontWeight: 'bold',fontStyle: 'italic',fontVariant: 'small-caps',fontFamily: 'sans-serif',color:'white'}}> ngle</h3>
                </div>
             </div>

             
             

           </div>

           <div className="menu-icon" onClick={handleShowNavbar}>
              <img color="white" src={Hamburger}/>
           </div>

           <div  className={`nav-elements  ${showNavbar && 'active'}`}>
             <ul>
               <li>
                 <NavLink to="/">Home</NavLink>
               </li>
               <li>
                 <NavLink to="/membership">Membership</NavLink>
               </li>
               <li>
                 <NavLink to="/offers">Offers</NavLink>
               </li>
               <li>
                 <NavLink to="/training">Personal Training</NavLink>
               </li>
               <li>
                 <NavLink to="/nutrition">Nutrition</NavLink>
               </li>
             </ul>
           </div>
         </div>
       </nav>
    )
}

export default Navbar