import React, { useEffect, useRef } from "react";
import workItImage from '../assets/images/resize_height(1).jpg'
import { useForm } from "react-hook-form";
import guestPassImage from '../assets/images/free-guest-paas-new-final.jpg'
import refferFriendImage from '../assets/images/reffer_friend_three.jpg'
import recoverImage from '../assets/images/recovery_hd_image.jpg'
import muscleReliefImage from '../assets/images/recovery-image-ori.jpg'
import startTodayImage from '../assets/images/start_today.jpg'
import coffeImage from '../assets/images/coffe_one.jpg'
import { useLocation } from "react-router-dom";
import cCdCoffee from '../assets/images/ccd-coffe-original.jpg'
import SignUpContainer from "./SignUpContainer";

const headingStyle = {
    position: 'absolute',
    top: '70%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '2',
    textAlign: 'center',
}
  
  const sectionTwoStyle = {
    width: '65%',
    borderRadius: '8px', // Add some border-radius for a clean look
  }
  
  const sectionOneStyle = {
    width:'30%',
    borderRadius: '8px', // Add some border-radius for a clean look
  }
  
  const subHeadings = {
    color:'black',
    textAlign:'left',
    fontFamily: 'sans-serif',
    fontSize: '33px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontStyle: 'italic',
    lineHeight: '1.1em',
    letterSpacing: '-1px'
  }
  
  const headingInformation = {
    color:'black',
    textAlign:'left',
    fontSize:'medium'
  }
  
  const inputStyle = {
    // marginRight: '5px',
    // marginLeft: '5px',
    height: '35px',
    width:'100%',
    fontSize:'15px'
  }

  const images = [
    { name: "Navratri Offer", image: guestPassImage, mainHeading:'NAVRATRI FITNESS OFFER: BUY 2 MONTHS, GET 1 FREE'},
    { name: "Reffer Friend", image: refferFriendImage ,mainHeading:'REFER A FRIEND' , subHeading:'Get fit and save loads while you do it!'},
    { name: "Rcovery", image: recoverImage  , mainHeading:'ACCELERATE RECOVERY WITH NORMATEC AIR COMPRESSION' },
    { name: "Muscle Relief", image: muscleReliefImage , mainHeading:'RAPID MUSCLE RELIEF' },
    { name: "Start Today", image: startTodayImage , mainHeading:'START TODAY AT WAVES GYM - #SAFESWEATSPACE!'},
    { name: "Coffee", image: coffeImage , mainHeading:'CCD COFFEE', subHeading:'Your Daily Cup Of Happiness'}
  ];

const MultipleOffers = () => {

   const form = useForm();
   const {register, handleSubmit,reset, formState} = form;
   const {errors} =formState;
   const myElementRef = useRef(null); // Initialize a ref

   const onSubmit = () =>{
        console.log('form submitted');
    }

    const location = useLocation(); // To access the current URL

    // Extract the query parameter 'classIndex' from the URL
    const searchParams = new URLSearchParams(location.search);
    const className = searchParams.get('offerName');

    const selectedClass = images.find((item)=> item.name.substring(0,3).toLocaleLowerCase() === className.substring(0,3).toLocaleLowerCase());
    const sectionName = { name : className}


    useEffect(()=>{

        if(myElementRef.current){

                // Set the date we're counting down to
                if(selectedClass.name === 'Navratri Offer'){
                    var countDownDate = new Date("Nov 01, 2024 15:37:25").getTime();
                }else if(selectedClass.name === 'Rcovery'){
                    var countDownDate = new Date("Oct 31, 2024 24:00:00").getTime();
                }else {
                    var countDownDate = null;
                }

                // Update the count down every 1 second
                var x = setInterval(function() {

                // Get today's date and time
                var now = new Date().getTime();
                    
                // Find the distance between now and the count down date
                var distance = countDownDate - now;
                    
                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    
                // Output the result in an element with id="demo"
                document.getElementById("days").innerHTML = days + "d ";
                document.getElementById("hours").innerHTML = hours + "h ";
                document.getElementById("minutes").innerHTML = minutes + "m " ;
                document.getElementById("seconds").innerHTML = seconds + "s ";
                    
                // If the count down is over, write some text 
                if (distance < 0) {
                    clearInterval(x);
                    document.getElementById("days").innerHTML = "EXPIRED";
                }
                }, 1000);
        }
        

    },[])

    return (
        <div className="App">
            <div className="workout-classes-page">
                <div className="class-image-container">

                    {selectedClass ? 
                            (<div>
                            <img style={{width:'100%',height:'auto'}} src={selectedClass.image}/>
                            </div>):(<h2>Invalid Class</h2>)
                    }

                    <div className="heading-container" style={headingStyle}>
                        <h1 style={{ fontSize:'4vw',color:'white',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',fontFamily: 'sans-serif'}}>{selectedClass.mainHeading}</h1>
                    </div>

                    <div className="page-heading-two" style={{position: 'absolute',top: '90%',left: '50%',transform: 'translate(-50%, -50%)',zIndex: '2',textAlign: 'center',}}>
                        <div style={{fontSize:'1.3vw',color:'white'}}>   
                            {selectedClass.subHeading}
                        </div>
                    </div>

                </div>

                <div className="membership-content" style={{display:'flex',justifyContent:'center',padding:'40px'}}>
                    <div style={{marginLeft:'200px',marginRight:'200px'}}>

                        <div className="section-one" style={sectionOneStyle}>
                          <div className="sign-up-container" style={{padding:'10px'}}>
                            <div className="membership-form-container" style={{margin:'10px',backgroundColor:'#F6F6F6',borderRadius:'8px'}}>
                                <div style={{paddingTop:'10px'}}>             
                                    <h1 style={{color:'#54595f',fontFamily: 'sans-serif',fontSize: '24px',fontWeight: 'bold',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px'}}>SIGN-UP TODAY</h1>
                                </div>

                                <div className="membership-form">  
                                   <SignUpContainer
                                   sectionName={sectionName}/> 
                                </div>
                            </div>
                          </div>

                          <div style={{padding:'17px'}}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15129.592067505522!2d73.7730254!3d18.5560863!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf234cb99089%3A0xad6ac64a035ac1c2!2sGold&#39;s%20Gym%20Baner!5e0!3m2!1sen!2sin!4v1727275032477!5m2!1sen!2sin" 
                             width="100%" height="300" style={{border:'0',borderRadius:'8px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                          </div>

                        <div className="side-image" style={{position:'relative'}}>

                          <div style={{paddingLeft:'17px',paddingRight:'17px',paddingTop:'17px'}}>
                            <img style={{width:'100% ', height:'auto',borderTopLeftRadius:'8px',borderTopRightRadius:'8px'}} src={workItImage}/>
                            
                          </div>

                          <div style={{position:'absolute',top: '20%', left: '10%', transform: 'translate(0, -50%)' }}>
                             <h2 style={{color:'white', color: '#FFFFFF00',fontSize:'2.5vw',webkitTextStrokeWidth: '1px',strokeWidth: '1px',webkitTextStrokeColor: 'rgba(255, 255, 255, 255)',stroke: 'rgba(255, 255, 255, 255)', fontStyle:'italic'}}>WORK IT</h2>
                          </div>

                          <div style={{position:'absolute',top: '40%', left: '10%', transform: 'translate(0, -50%)' }}>
                             <h2 style={{color:'white', color: '#FFFFFF00',fontSize:'2.5vw',webkitTextStrokeWidth: '1px',strokeWidth: '1px',webkitTextStrokeColor: 'rgba(255, 255, 255, 255)',stroke: 'rgba(255, 255, 255, 255)', fontStyle:'italic'}}>WORK IT</h2>
                          </div>

                          <div style={{position:'absolute',top: '40%', left: '10%', transform: 'translate(0, -50%)' }}>
                             <h2 style={{color:'white', color: '#FFFFFF00',fontSize:'2.5vw',webkitTextStrokeWidth: '1px',strokeWidth: '1px',webkitTextStrokeColor: 'rgba(255, 255, 255, 255)',stroke: 'rgba(255, 255, 255, 255)', fontStyle:'italic'}}>WORK IT</h2>
                          </div>

                          <div style={{position:'absolute',top: '60%', left: '10%', transform: 'translate(0, -50%)' }}>
                             <h2 style={{color:'white', color: '#FFFFFF00',fontSize:'2.5vw',webkitTextStrokeWidth: '1px',strokeWidth: '1px',webkitTextStrokeColor: 'rgba(255, 255, 255, 255)',stroke: 'rgba(255, 255, 255, 255)', fontStyle:'italic'}}>WORK IT</h2>
                          </div>

                          <div style={{position:'absolute',top: '60%', left: '10%', transform: 'translate(0, -50%)' }}>
                             <h2 style={{color:'white', color: '#FFFFFF00',fontSize:'2.5vw',webkitTextStrokeWidth: '1px',strokeWidth: '1px',webkitTextStrokeColor: 'rgba(255, 255, 255, 255)',stroke: 'rgba(255, 255, 255, 255)', fontStyle:'italic'}}>WORK IT</h2>
                          </div>

                          <div style={{position:'absolute',top: '60%', left: '10%', transform: 'translate(0, -50%)' }}>
                             <h2 style={{color:'white', color: '#FFFFFF00',fontSize:'2.5vw',webkitTextStrokeWidth: '1px',strokeWidth: '1px',webkitTextStrokeColor: 'rgba(255, 255, 255, 255)',stroke: 'rgba(255, 255, 255, 255)', fontStyle:'italic'}}>WORK IT</h2>
                          </div>

                          <div style={{position:'absolute',top: '60%', left: '10%', transform: 'translate(0, -50%)' }}>
                             <h2 style={{color:'white', color: '#FFFFFF00',fontSize:'2.5vw',webkitTextStrokeWidth: '1px',strokeWidth: '1px',webkitTextStrokeColor: 'rgba(255, 255, 255, 255)',stroke: 'rgba(255, 255, 255, 255)', fontStyle:'italic'}}>WORK IT</h2>
                          </div>

                          <div style={{position:'absolute',top: '80%', left: '10%', transform: 'translate(0, -50%)' }}>
                             <h2 style={{color:'white', fontSize:'2.5vw',webkitTextStrokeWidth: '1px',strokeWidth: '1px',webkitTextStrokeColor: 'rgba(255, 255, 255, 255)',stroke: 'rgba(255, 255, 255, 255)', fontStyle:'italic'}}>WORK IT</h2>
                          </div>

                        </div>

                        <div style={{marginLeft:'17px',marginRight:'17px',backgroundColor:'black',textAlign:'left',marginTop:'0px',padding:'20px',borderBottomLeftRadius:'8px',borderBottomRightRadius:'8px'}}>
                            <h1 style={{ color: 'rgb(255, 63, 12)',fontStyle:'italic', fontSize:'2.4vw'}}>FREE TRAIL</h1>
                            <p style={{color:'white'}}>Call us on +91 99200 84402 to book your Free Day Pass at Waves Gym.</p>
                        </div>

                        </div>

                        <div className="section-two" style={sectionTwoStyle}>

                            {selectedClass.name == 'Navratri Offer' ? (
                                <div>

                                    <div className="offer-till-date" style={{display: 'flex',maxWidth: '100%', justifyContent: 'center',marginLeft: 'auto',marginRight: 'auto'}}>

                                        <div className="days-remaining" style={{backgroundColor: '#FF3F0C',borderStyle: '2px solid white',borderRadius: '11px 11px 11px 11px',flexBasis:'0',flexGrow: '1',marginRight: 'calc(28px/2 )'}}>
                                            <span style={{fontSize:'65px',color:'white',display:'block'}} ref={myElementRef} id="days"></span>
                                            <span style={{color:'white',fontSize:'30px',fontFamily:'sans-serif',fontWeight:'bold'}}>DAYS</span>

                                        </div>

                                        <div className="hours-remaining" style={{backgroundColor: '#FF3F0C',borderStyle: '2px solid white',borderRadius: '11px 11px 11px 11px',flexBasis:'0',flexGrow: '1',marginRight: 'calc(28px/2 )'}}>
                                            <span style={{fontSize:'65px',color:'white',display:'block'}} ref={myElementRef} id="hours"></span>
                                            <spna style={{color:'white',fontSize:'30px',fontFamily:'sans-serif',fontWeight:'bold'}}>HOURS</spna>

                                        </div>

                                        <div className="minutes-remaining" style={{backgroundColor: '#FF3F0C',borderStyle: '2px solid white',borderRadius: '11px 11px 11px 11px',flexBasis:'0',flexGrow: '1',marginRight: 'calc(28px/2 )'}}>
                                            <span style={{fontSize:'65px',color:'white',display:'block'}} ref={myElementRef} id="minutes"></span>
                                            <span style={{color:'white',fontSize:'30px',fontStyle:'sans-serif',fontWeight:'bold'}}>MINUTES</span>
                                            
                                        </div>

                                        <div className="seconds-remaining" style={{backgroundColor: '#FF3F0C',borderStyle: '2px solid white',borderRadius: '11px 11px 11px 11px',flexBasis:'0',flexGrow: '1',marginRight: 'calc(28px/2 )'}}>
                                            <span style={{fontSize:'65px',color:'white',display:'block'}} ref={myElementRef} id="seconds"></span>
                                            <span style={{color:'white',fontSize:'30px',fontStyle:'sans-serif',fontWeight:'bold'}}>SECONDS</span>
                                        </div>

                                    </div>

                                    <div style={{marginTop:'40px'}}>
                                        <h2 align='left' style={{fontFamily: 'sans-serif',fontSize: '50px',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',color:'black'}}>🔥 DON'T MISS OUT ON WAVES GYM'S NAVRATRI FITNESS OFFER!</h2>
                                    </div>

                                    <div>
                                        <h2 align='left' style={{fontFamily: 'sans-serif',fontSize: '40px',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',color:'black'}}>⏰ HURRY! OFFER ENDS OCT 12, 2024!</h2>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={headingInformation}>
                                         Embrace the spirit of Navratri and ride the wave to a healthier you with <span>Waves Gym's exclusive Navratri Fitness Offer! For a limited time only, buy 2 months of membership and get 1 month absolutely FREE! That's three months of transformative fitness experiences for the price of two! 🎁  </span> 
                                        </p>
                                    </div>

                                    <div>
                                        <h2 align='left' style={{fontFamily: 'sans-serif',fontSize: '40px',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',color:'black'}}>🌟 JOIN OUR 20-YEAR FITNESS LEGACY</h2>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={headingInformation}>
                                        For two decades, Waves Gym has been a beacon of strength, community, and empowerment in Mumbai's Andheri West. As a part of our family, you'll experience:                                        </p>
                                    </div>

                                    <div style={{marginTop:'20px'}}>
                                        
                                        <div >
                                        <ul style={{textAlign:'left',marginLeft:'30px',fontSize:'medium'}}>
                                            <li style={{color:'black'}}><span>State-of-the-Art Facilities:</span>10,000 sq.ft. of modern TechnoGym & LifeFitness equipment designed to elevate your workouts.</li>
                                            <li style={{color:'black'}}><span>Unlimited Classes: </span>Dive into over 150 classes like Zumba, Power Yoga, Kickboxing, and CrossFit, led by internationally certified trainers.</li>
                                            <li style={{color:'black'}}><span>Luxurious Amenities: </span>Enjoy complimentary valet parking, daily-use lockers, steam rooms, and a relaxing abCoffee café.</li>
                                            <li style={{color:'black'}}><span>#SafeSweatSpace:</span>Your safety is our priority with private access and constant surveillance, ensuring a nurturing environment.</li>
                                        </ul>
                                        </div>
                                        
                                    </div>

                                    <div>
                                        <h2 align='left' style={{fontFamily: 'sans-serif',fontSize: '40px',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',color:'black'}}>🎉 FESTIVE BONUS</h2>
                                    </div>

                                    <div style={{marginTop:'20px'}}>
                                        
                                        <div >
                                        <ul style={{textAlign:'left',marginLeft:'30px',fontSize:'medium'}}>
                                            <li style={{color:'black'}}><span>Unlimited Classes Included: </span>Enhance your fitness journey with classes that suit every preference.</li>
                                            <li style={{color:'black'}}><span>Limited-Time Offer: </span> Valid from 3rd October to 12th October 2024. Hurry, this offer won’t last long! ⏳</li>
                                        </ul>
                                        </div>
                                        
                                    </div>

                                    <div>
                                        <h2 align='left' style={{fontFamily: 'sans-serif',fontSize: '40px',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',color:'black'}}>💪 YOUR TRANSFORMATION STARTS HERE</h2>
                                    </div>

                                    <div style={{marginTop:'20px'}}>
                                        
                                        <div >
                                        <ul style={{textAlign:'left',marginLeft:'30px',fontSize:'medium'}}>
                                            <li style={{color:'black',marginTop:'10px'}}>Don't let this opportunity slip through your fingers! Feel the energy of Navratri propel you towards your fitness goals in a space that's dedicated to your well-being.</li>
                                        </ul>
                                        </div>
                                        
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={{textAlign:'left',color:'#ff0000',fontWeight:'bolder'}}>
                                        Join the Waves Gym Family Today!
                                         </p>
                                    </div>

                                    {/* <div>
                                     <img style={{width:'100%',height:'auto',borderRadius:'7px'}} src={kickBoxingSecondaryImage}/>
                                    </div> */}

                                    

                                </div>):''
                            }

                            {selectedClass.name == 'Reffer Friend' ? (
                                <div>

                                    <div style={{marginTop:'40px'}}>
                                        <h2 align='left' style={{fontFamily: 'sans-serif',fontSize: '50px',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',color:'black'}}>TRANSFORM YOUR FITNESS JOURNEY WITH FRIENDS AT WAVES GYM!</h2>
                                    </div>

                                    <div>
                                        <h2 align='left' style={{fontFamily: 'sans-serif',fontSize: '20px',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',color:'black'}}>🌟 Refer a Friend, Elevate Your Experience! 🌟</h2>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={headingInformation}>
                                          At Waves Gym, we're not just a fitness center; we're a community. We believe in the power of group fitness, and it's even more rewarding with your friends by your side. It's not just about a workout; it's about sharing a journey towards better health and having fun along the way.                
                                        </p>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <span style={{fontWeight:'bold',fontSize:'19px'}}>Why Bring Friends to Waves Gym?</span>
                                    </div>

                                    <div style={{marginTop:'20px'}}>
                                        
                                        <div >
                                            <ul style={{textAlign:'left',marginLeft:'30px',fontSize:'medium'}}>
                                                <li style={{color:'black'}}><span>🏋️ Energetic Atmosphere:</span> Thrive in a vibrant facility that inspires you to push your limits.</li>
                                                <li style={{color:'black'}}><span>💪 Expert Trainers:</span>Get guidance from certified professionals who know how to make your fitness goals a reality.</li>
                                                <li style={{color:'black'}}><span>🌍 World-Class Programs: </span>Access diverse workout routines, recognized and loved globally.</li>
                                                <li style={{color:'black'}}><span>📍 Convenience at Its Best: </span>Easy accessibility, ample parking, and a handy gym app.</li>
                                                <li style={{color:'black'}}><span>🚗 Stress-Free Parking:  </span>We valet. Never worry about finding a spot.</li>
                                                <li style={{color:'black'}}><span>📲 Waves Gym App: </span>Manage your workouts and progress with ease.</li>
                                                <li style={{color:'black'}}><span>🔄 Exceptional Facilities: </span>Enjoy top-notch changing rooms and amenities.</li>
                                            </ul>
                                        </div>
                                        
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <span style={{fontWeight:'bold',fontSize:'19px'}}>🌟 Special Referral Offer 🌟 </span>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={headingInformation}>
                                        For every friend you bring to Waves Gym, we'll thank you by adding an extra month to your membership- absolutely free! It's our way of saying we appreciate you for helping us make Mumbai a fitter, healthier city.                                        </p>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <span style={{fontWeight:'bold',fontSize:'19px'}}>Ready to Make a Difference?</span>
                                    </div>

                                    <div style={{marginTop:'20px'}}>
                                        
                                        <div >
                                            <ul style={{textAlign:'left',marginLeft:'30px',fontSize:'medium'}}>
                                                
                                                <li style={{color:'black'}}><span style={{fontWeight:'bold'}}>Join the Fitness Revolution at Waves Gym! </span></li>
                                                <li style={{color:'black'}}><span style={{fontWeight:'bold'}}>Refer a Friend Today!</span></li>
                                            </ul>
                                        </div>
                                        
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={headingInformation}>
                                        Together, let's reach new heights in fitness and friendship. Your gym journey is about to get even more exciting!                                                                               </p>
                                    </div>

                                    

                                </div>):''
                            }

                            {selectedClass.name == 'Rcovery' ? (
                                <div>

                                    <div className="offer-till-date" style={{display: 'flex',maxWidth: '100%', justifyContent: 'center',marginLeft: 'auto',marginRight: 'auto'}}>

                                        <div className="days-remaining" style={{backgroundColor: '#FF3F0C',borderStyle: '2px solid white',borderRadius: '11px 11px 11px 11px',flexBasis:'0',flexGrow: '1',marginRight: 'calc(28px/2 )'}}>
                                            <span style={{fontSize:'65px',color:'white',display:'block'}} ref={myElementRef} id="days"></span>
                                            <span style={{color:'white',fontSize:'30px',fontFamily:'sans-serif',fontWeight:'bold'}}>DAYS</span>

                                        </div>

                                        <div className="hours-remaining" style={{backgroundColor: '#FF3F0C',borderStyle: '2px solid white',borderRadius: '11px 11px 11px 11px',flexBasis:'0',flexGrow: '1',marginRight: 'calc(28px/2 )'}}>
                                            <span style={{fontSize:'65px',color:'white',display:'block'}} ref={myElementRef} id="hours"></span>
                                            <spna style={{color:'white',fontSize:'30px',fontFamily:'sans-serif',fontWeight:'bold'}}>HOURS</spna>

                                        </div>

                                        <div className="minutes-remaining" style={{backgroundColor: '#FF3F0C',borderStyle: '2px solid white',borderRadius: '11px 11px 11px 11px',flexBasis:'0',flexGrow: '1',marginRight: 'calc(28px/2 )'}}>
                                            <span style={{fontSize:'65px',color:'white',display:'block'}} ref={myElementRef} id="minutes"></span>
                                            <span style={{color:'white',fontSize:'30px',fontStyle:'sans-serif',fontWeight:'bold'}}>MINUTES</span>
                                            
                                        </div>

                                        <div className="seconds-remaining" style={{backgroundColor: '#FF3F0C',borderStyle: '2px solid white',borderRadius: '11px 11px 11px 11px',flexBasis:'0',flexGrow: '1',marginRight: 'calc(28px/2 )'}}>
                                            <span style={{fontSize:'65px',color:'white',display:'block'}} ref={myElementRef} id="seconds"></span>
                                            <span style={{color:'white',fontSize:'30px',fontStyle:'sans-serif',fontWeight:'bold'}}>SECONDS</span>
                                        </div>

                                    </div>

                                    <div style={{marginTop:'40px'}}>
                                        <h2 align='left' style={{fontFamily: 'sans-serif',fontSize: '50px',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',color:'black'}}>FINAL CALL! UNLOCK FASTER RECOVERY WITH NORMATEC - GET 10 HEALING SESSIONS FOR JUST ₹999 BEFORE OCTOBER 31, 2024!</h2>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={headingInformation}>
                                        At Waves Gym,<span style={{fontWeight:'bold'}}> time is running out</span>  to seize our exclusive Normatec Recovery System offer. For a <span style={{fontWeight:'bold'}}>limited time only</span>, unlock 10 revitalizing sessions for just<span style={{fontWeight:'bold'}}> ₹999! </span> Don't let this opportunity slip away—offer ends on <span style={{fontWeight:'bold'}}>October 31, 2024.</span>                                         </p>
                                    </div>

                                    <div>
                                        <h2 align='left' style={{fontFamily: 'sans-serif',fontSize: '40px',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',color:'black'}}>WHY ACT NOW?</h2>
                                    </div>

                                    <div style={{marginTop:'20px'}}>
                                        
                                        <div >
                                        <ul style={{textAlign:'left',marginLeft:'30px',fontSize:'medium'}}>
                                            <li style={{color:'black'}}><span>⏳ Limited-Time Offer:</span>This unbeatable deal is ending soon. Secure your sessions before it's too late!</li>
                                            <li style={{color:'black'}}><span>🏃‍♀️ Enhance Performance:  </span>Accelerate your recovery process and stay at the top of your game.</li>
                                            <li style={{color:'black'}}><span>💰 Unbeatable Value: </span> Experience elite athlete recovery at a fraction of the cost.</li>
                                        </ul>
                                        </div>
                                        
                                    </div>

                                    <div>
                                        <h2 align='left' style={{fontFamily: 'sans-serif',fontSize: '40px',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',color:'black'}}>EXPERIENCE THE NORMATEC RECOVERY SYSTEM</h2>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={headingInformation}>
                                        Trusted by the world's top athletes, the Normatec Recovery System is engineered to turbocharge your healing process, ensuring you're always ready to perform.
                                        </p>
                                    </div>

                                    

                                    <div>
                                        <h2 align='left' style={{fontFamily: 'sans-serif',fontSize: '40px',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',color:'black'}}>WHY INCORPORATE NORMATEC AIR COMPRESSION THERAPY?</h2>
                                    </div>

                                    <div style={{marginTop:'20px'}}>
                                        
                                        <div >
                                            <ul style={{textAlign:'left',marginLeft:'30px',fontSize:'medium'}}>
                                                <li style={{color:'black'}}><span>🔥 Accelerated Recovery Speed: </span> Boost blood flow to your muscles, reducing downtime between workouts.</li>
                                                <li style={{color:'black'}}><span>💪 Reduced Muscle Soreness:  </span>  Alleviate post-workout discomfort with Normatec's sequential pulse technology.</li>
                                                <li style={{color:'black'}}><span>🎯 Customized Sessions:   </span>Tailor each session to focus on areas that need the most attention.</li>
                                            </ul>
                                        </div>
                                        
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={headingInformation}>
                                        Investing just<span style={{fontWeight:'bold'}}>20-30 minutes</span>  into air compression therapy can revolutionize your training regimen—making every workout more effective and your progress more secure.                                        </p>
                                    </div>

                                    <div>
                                        <h2 align='left' style={{fontFamily: 'sans-serif',fontSize: '40px',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',color:'black'}}>SESSION DETAILS</h2>
                                    </div>

                                    <div>
                                        <h2 align='left' style={{fontFamily: 'sans-serif',fontSize: '25px',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',color:'black'}}>Option 1: Single Session</h2>
                                    </div>

                                    <div style={{marginTop:'20px',marginBottom:'20px'}}>
                                        
                                        <div >
                                            <ul style={{textAlign:'left',marginLeft:'30px',fontSize:'medium'}}>
                                                <li style={{color:'black',marginTop:'10px'}}><span style={{fontWeight: 'bold'}}>Duration: </span>30-minute session to boost circulation, alleviate soreness, and improve flexibility.</li>
                                                <li style={{color:'black',marginTop:'10px'}}><span style={{fontWeight: 'bold'}}>Flexibility: </span>Split into two 15-minute sessions within a week.</li>
                                                <li style={{color:'black',marginTop:'10px'}}><span style={{fontWeight: 'bold'}}>Rate: </span> Just ₹499 per session.</li>
                                                <li style={{color:'black',marginTop:'10px'}}><span style={{fontWeight: 'bold'}}>Validity:  </span>Valid for 7 days.</li>

                                            </ul>
                                        </div>
                                        
                                    </div>

                                    <div>
                                        <h2 align='left' style={{fontFamily: 'sans-serif',fontSize: '25px',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',color:'black'}}>Option 2: Final Offer! 10 Sessions Package</h2>
                                    </div>

                                    <div style={{marginTop:'20px', marginBottom:'20px'}}>
                                        
                                        <div >
                                            <ul style={{textAlign:'left',marginLeft:'30px',fontSize:'medium'}}>
                                                <li style={{color:'black',marginTop:'10px'}}><span style={{fontWeight: 'bold'}}>Duration: </span>Each 15-minute session rejuvenates and revitalizes.</li>
                                                <li style={{color:'black',marginTop:'10px'}}><span style={{fontWeight: 'bold'}}>Flexibility: </span>Share sessions with friends and family* (*Non-Members Only).</li>
                                                <li style={{color:'black',marginTop:'10px'}}><span style={{fontWeight: 'bold'}}>Rate: </span>Only ₹999 for 10 sessions—offer expires on October 31, 2024!</li>
                                                <li style={{color:'black',marginTop:'10px'}}><span style={{fontWeight: 'bold'}}>Validity:  </span>Use within 60 days.</li>

                                            </ul>
                                        </div>
                                        
                                    </div>

                                    <div>
                                        <h2 align='left' style={{fontFamily: 'sans-serif',fontSize: '30px',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',color:'black'}}>TIME IS TICKING—ACT NOW!</h2>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={headingInformation}>
                                        Elevate your fitness journey at Waves Gym with the Normatec Recovery System. This is more than a tool—it's your gateway to peak performance. Remember, this exclusive offer ends on October 31, 2024.                                         </p>
                                    </div>

                                    <div>
                                        <h2 align='left' style={{fontFamily: 'sans-serif',fontSize: '30px',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',color:'black'}}>JOIN US TODAY AND FEEL THE DIFFERENCE</h2>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={headingInformation} >
                                        Don't miss this last chance to transform your recovery routine.<span style={{fontWeight:'bold'}}> Once the clock strikes midnight on October 31st, this offer will be gone!</span>
                                         </p>                                    
                                    </div>

                                    

                                </div>):''
                            }

                            {selectedClass.name == 'Muscle Relief' ? (
                                <div>

                                    <div style={{marginTop:'40px'}}>
                                        <h2 align='left' style={{fontFamily: 'sans-serif',fontSize: '50px',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',color:'black'}}>TTRANSFORM YOUR RECOVERY - EXPERIENCE PERCUSSION MASSAGE THERAPY FOR RAPID MUSCLE RELIEF AT WAVES GYM</h2>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={headingInformation}>
                                          Welcome to a new era of muscle recovery and relaxation. Waves Gym is proud to introduce our cutting-edge Percussion Massage Therapy, utilizing the powerful Hypervolt 2 Pro. Now, the same high-intensity percussion therapy loved by the world's top athletes is available right at your fingertips.
                                        </p>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <span style={{fontWeight:'bold',fontSize:'19px'}}>Why Choose Percussion Massage Therapy?</span>
                                    </div>

                                    <div style={{marginTop:'20px'}}>
                                        
                                        <div >
                                            <ul style={{textAlign:'left',marginLeft:'30px',fontSize:'medium'}}>
                                                <li style={{color:'black',marginTop:'10px'}}><span style={{fontWeight:'bold'}}>Rapid Muscle Relief:</span> The Hypervolt 2 Pro is our most potent device, offering profound, penetrating massage to alleviate muscle stiffness. Now, you can train harder and recover quicker.</li>
                                                <li style={{color:'black',marginTop:'10px'}}><span style={{fontWeight:'bold'}}>Customizable Intensity: </span>Tailor your therapy with five adjustable speeds. Whether it's intense recovery or gentle relaxation, find your perfect rhythm with the digital speed dial.</li>
                                                <li style={{color:'black',marginTop:'10px'}}><span style={{fontWeight:'bold'}}>Guided Routines:</span>Elevate your warm-up and recovery with the Hyperice App. Enjoy routines crafted by leading athletes and tailored to your body's needs.</li>
                                                <li style={{color:'black',marginTop:'10px'}}><span style={{fontWeight:'bold'}}>Convenient and Efficient: </span>Each session lasts just 15 minutes, perfect for a quick break or post-workout recovery, all for an affordable price of INR 249.</li>
                                            </ul>
                                        </div>
                                        
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <span style={{fontWeight:'bold',fontSize:'19px'}}>Ready to Revolutionize Your Recovery?</span>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={headingInformation}>
                                           <span style={{fontWeight:'bold'}}>Book Your Session Now</span> - Don't miss out on this opportunity to boost your performance, relieve your muscles, and embrace a faster recovery. Join us at Waves Gym and step into the realm of professional athletes. Your journey towards optimized recovery starts here.
                                        </p>                                    
                                    </div>

                                </div>):''
                            }

                            {selectedClass.name == 'Start Today' ? (
                                <div>

                                    <div style={{marginTop:'40px'}}>
                                        <h2 align='left' style={{fontFamily: 'sans-serif',fontSize: '50px',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',color:'black'}}>WELCOME TO WAVES GYM: YOUR SANCTUARY WHERE SAFETY MEETS SWEAT!</h2>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <span style={{fontWeight:'bold',fontSize:'19px'}}>Welcome to Waves Gym: Where Legacy and Safety Empower Your Fitness Journey</span>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={headingInformation}>
                                        At Waves Gym, we're not just a gym; we're a legacy of strength, safety, and community. For 20 years, we've been more than a place to sweat; we've been a sanctuary for everyone seeking a safe and empowering space to embrace their fitness journey. Here, your well-being is our priority, and every workout is a step toward your best self.                                        </p>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <span style={{fontWeight:'bold',fontSize:'19px'}}>Our #SafeSweatSpace Commitment: More Than Just a Promise</span>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={headingInformation}>
                                        Your journey with us is about more than achieving fitness goals; it's about finding a safe haven where you can grow, heal, and celebrate your achievements. Our commitment to your safety and well-being is unwavering, with private access, constant surveillance, and a nurturing environment that goes beyond the physical.                                        </p>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <span style={{fontWeight:'bold',fontSize:'19px'}}> Discover the Waves Gym Difference: A Legacy of Empowerment</span>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={headingInformation}>
                                          Join a community where your fitness journey is honored and supported. Our state-of-the-art facilities are designed with your safety and wellness in mind. From internationally certified trainers to over 150 group fitness classes, we cater to every fitness level and preference.
                                        </p>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={headingInformation}>
                                         Our luxurious amenities, including new showers, steam rooms, and a coffee cafe, are here to enhance your experience, making every visit to Waves Gym a retreat from the ordinary.
                                        </p>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <span style={{fontWeight:'bold',fontSize:'19px'}}>Join the Legacy Today</span>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={headingInformation}>
                                        Embark on a fitness journey where safety and support are integral to your success. Sign up this month to join our community and unlock a complimentary wellness workshop, exclusive to our new members. With flexible membership options and a welcoming environment, your path to empowerment starts here.
                                        </p>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <span style={{fontWeight:'bold',fontSize:'19px'}}>Waves Gym: A 20-Year Legacy of Fitness Excellence</span>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={headingInformation}>
                                         Step into a world where your potential is unlimited, your safety is paramount, and your well-being is our ultimate goal. With world-class facilities, expert trainers, and a legacy of empowerment, Waves Gym is your sanctuary where safety meets sweat.
                                        </p>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={headingInformation}>
                                        Ready to begin your fitness journey? Join Waves Gym today and transform your life in a space where every workout is a celebration of your strength and resilience.
                                         </p>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <span style={{fontWeight:'bold',fontSize:'19px',textAlign:'left'}}>Your journey to empowerment starts here. Join the legacy, embrace your strength, and discover the intrinsic value of a truly safe and supportive fitness space.</span>
                                    </div>

                                </div>):''
                            }

                            {selectedClass.name == 'Coffee' ? (
                                <div>

                                    <div style={{marginTop:'40px'}}>
                                        <h2 align='left' style={{fontFamily: 'sans-serif',fontSize: '50px',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',color:'black'}}>PERFECTION IN EVERY CUP</h2>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={headingInformation}>
                                          At Waves Gym, we believe in the power of a great workout complemented by exceptional nutrition. That's why we've partnered with abCoffee to offer you exclusive blends that suit your active lifestyle. From energizing pre-workout options to soothing post-workout coffees, each cup is a perfect blend of health and taste.
                                        </p>
                                    </div>

                                    <div>
                                      <img style={{width:'100%',height:'auto',borderRadius:'7px'}} src={cCdCoffee}/>
                                    </div>

                                    <div style={{marginTop:'20px'}}>
                                        <p style={{textAlign:'left'}}>
                                            <strong style={{color:'black',fontSize:'larger'}}>
                                              Café Coffee Day (CCD) claims that their coffee can provide a number of benefits, including: 
                                            </strong>
                                        </p>
                                        
                                        <div>
                                            <ul style={{textAlign:'left',marginLeft:'30px',fontSize:'medium'}}>
                                                <li style={{color:'black'}}><span style={{fontWeight: 'bold'}}>Weight loss : </span>CCD's Green Coffee is said to help with weight loss and a healthy metabolism</li>
                                                <li style={{color:'black'}}><span style={{fontWeight: 'bold'}}>Energy boost : </span>CCD claims that coffee can provide an energy boost</li>
                                                <li style={{color:'black'}}><span style={{fontWeight: 'bold'}}>Mental performance : </span>CCD says that caffeine can improve mental performance, reaction time, and attention span</li>
                                                <li style={{color:'black'}}><span style={{fontWeight: 'bold'}}>Reduced risk of cancer : </span>CCD claims that coffee can reduce the risk of certain cancers</li>
                                                <li style={{color:'black'}}><span style={{fontWeight: 'bold'}}>Reduced risk of cirrhosis : </span>CCD claims that coffee can reduce the risk of cirrhosis of the liver</li>
                                            </ul>
                                        </div>
                                        
                                    </div>

                                </div>):''
                            }

                            
                            
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default MultipleOffers;