 import React, { useEffect, useState } from "react"
 import { ReactComponent as Loader } from '../assets/icons/loader.svg' 
 import  homeImage from '../assets/images/home_page_wallpaper_four.jpg'
 import  myImage from '../assets/images/New_Fitnes_Gym_logo_2_300x80.png'
// import { addUser } from "../redux/actions/userActions"
import { registerUser } from "../redux/user/UserSlice"
import { useDispatch } from "react-redux"
import '../App.css'
import {useForm} from 'react-hook-form'
import { Circles } from "react-loader-spinner"
import { render } from "@testing-library/react"
import { Checkmark } from 'react-checkmark'
import bodyComposition from '../assets/images/GettyImages-476805177-569530f65f9b58eba499f940.jpg'
import sevenDays from '../assets/images/open-7-days-neon-signs-style-text-free-vector.jpg'
import parking from '../assets/images/complimnetry-parking.jpg'
import cleaning from '../assets/images/cleaning-image.jpg'
import boyCrossFit from '../assets/images/crossfit_boy.jpg'
import girlCrossFit from '../assets/images/crossfit_girl.jpg'
import pTsecondaryImage from '../assets/images/personal_trainer_secondary_image.jpg'

import kickBoxingImage from '../assets/images/kickboxing.jpg'
import zumbaImage from '../assets/images/zumba-fitness.jpg'
import kidsKarateImage from '../assets/images/kids-karate.jpg'
import powerYogaImage from '../assets/images/power_yoga.jpg'
import indoorCyclingImages from '../assets/images/indoor-cycling-two.jpg'

import { fetchTrainingTypes } from "../redux/user/UserSlice"
import { unwrapResult } from "@reduxjs/toolkit"
import { useNavigate } from 'react-router-dom';


const inputStyle = {
   marginRight: '5px',
   marginLeft: '5px',
   height: '35px',
   width:'100%',
   fontSize:'15px'
}

const homeButtons = {
   border: 'none',
   padding: '10px 25px',
   textAlign: 'center',
   textDecoration: 'none',
   display: 'inlineBlock',
   fontSize: '17px',
   fontWeight: 'bold',
   fontStyle: 'italic',
   margin: '4px 2px',
   cursor: 'pointer',
   borderStyle:'solid',
   border: '2px solid #f44336',
   borderRadius:'5px'
}

const headingStyle = {
   color:'white',
   fontFamily: 'sans-serif',
   fontSize: 'larger',
   marginTop:'0px',
   marginBottom:'0px',
   paddingTop:'20px'
}

const contsinerStyle = {
   position: 'relative',
   textAlign: 'center',
   color: 'white',
}

const sloganStyle = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   zIndex: '2',
   textAlign: 'center',
}

const sectionTwoSTyle = {
   width: '52%',
   borderRadius: '8px', 
 }
 
 const sectionOneStyle = {
   width:'47%',
   borderRadius: '8px',
 }

 const headingInformation = {
   color:'black',
   textAlign:'left',
   fontSize:'medium'
 }

 const Home = () => {

   const dispatch = useDispatch();

   const form = useForm();
   const {register, handleSubmit,reset, formState} = form;
   const {errors} =formState;
   const navigate = useNavigate();

   const [showLoader, setShowLoader] = useState(false);
   const [isUserAdded, setIsUserAdded] = useState(false);

   const [trainingTypes, setTrainingTypes] = useState([]);

   const [slideIndex, setSlideIndex] = useState(0);
   const [isPaused, setIsPaused] = useState(false); // To track if sliding is paused
   const totalSlides = 5; // Total images

   const images = [kickBoxingImage, zumbaImage, kidsKarateImage, powerYogaImage, indoorCyclingImages];
   const classNames = ["Kickboxing", "Zumba", "Kids Karate", "Power Yoga", "Indoor Cycling"];

   // Calculate the sliding window to show 3 images at once
   // const visibleSlides = 3;

   const [visibleSlides, setVisibleSlides] = useState(3);

   useEffect(() => {
      const updateVisibleSlides = () => {
         if (window.innerWidth <= 768) {
            setVisibleSlides(1);
         } else if (window.innerWidth <= 1024) {
            setVisibleSlides(2);
         } else {
            setVisibleSlides(3);
         }
      };

      window.addEventListener("resize", updateVisibleSlides);
      updateVisibleSlides(); // Initialize on load

      return () => window.removeEventListener("resize", updateVisibleSlides);
   }, []);


    {/*Fetch Training Types*/}

    const fetchData = async () => {
      try {
        const data = await dispatch(fetchTrainingTypes()); 
        setTrainingTypes(data?.payload); 
      } catch (error) {
        console.log('error occurred', error); 
      }
    };

   useEffect(()=>{
      fetchData();
   },[]);

   const onSubmit = (data) => {

      console.log('submit',data);
      setShowLoader(true)

      const formDdata =
      { 
         first_name:data.userfirstname,
         last_name : data.userlastname,
         email:data.email,
         mobile:data.phone,
         training_type:data.trainingtype
      }

      console.log('submit form',formDdata);

      try{
         const response = dispatch(registerUser(formDdata));

         if(response){
            // setTimeout(()=> setShowLoader(false),4000);
            setShowLoader(false);
            navigate.push('/thank-you-page'); // Redirect to new page
            reset();
            setIsUserAdded(true);
         }

      }catch(e){
         console.log('User Not Added', e);
      }
   }

    
   // Auto sliding logic
   useEffect(() => {

      if(!isPaused){

         const showSlides = () => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
         };

         const interval = setInterval(showSlides, 2000); // Slide every 2 seconds
         // console.log('automatic-sliding',slideIndex)

         return () => clearInterval(interval); // Cleanup on unmount

      }
   }, [isPaused]);

    // Create the sliding window to display 3 images at a time in a loop
    const getSlidingImages = () => {
        let slidesToShow = [];
        for (let i = 0; i < visibleSlides; i++) {
            let imageIndex = (slideIndex + i) % totalSlides;
            slidesToShow.push({
               showImages:images[imageIndex],
               showClasses:classNames[imageIndex]
            }); // Loop over images
        }
        return slidesToShow;
    };

    // Hover event handlers
    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    const nextClassButton = () =>{
      setSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      console.log('slidingindex next',slideIndex);
    }

    const previousClassButton = () =>{
      setSlideIndex((prevIndex) => {
            const newIndex =  (prevIndex - 1 + totalSlides) % totalSlides;
            return newIndex;
         });

      console.log('previmage',slideIndex);
    }

return(
   <div className="App" style={{padding:'10px'}}>
      <div className="home-image-container" style={contsinerStyle}>

         <div className="home-img">
            <img style={{ width: '100%', height: 'auto'}} src={homeImage}/>
         </div>

         <div className="gym-slogan-heading" >

            <div style={sloganStyle}>

               <div>
                  <h2 style={{fontSize:'6vw'}}>
                     <span >#SAFESWEAT</span>
                     <span style={{color: 'red'}}>SPACE</span>
                  </h2>
               </div>

            </div>

            <div style={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',zIndex: '2',
            textAlign: 'center',maxWidth: '100%',textAlign: 'center',width: '100%',maxWidth: '100%',zIndex: 1}}>
               <div style={{textAlign:'center'}}>
                  <h2 style={{color: '#FFFFFF00',fontSize:'7vw',webkitTextStrokeWidth: '1px',strokeWidth: '1px',webkitTextStrokeColor: '#FFFFFF6E',stroke: '#FFFFFF6E'}}>#SAFESWEATSPACE</h2>
               </div>
            </div>

         </div>

      </div>

      <div className="registration-form" style={{backgroundColor:'#171515 ',borderBottom:'5px solid rgb(255,63,12)'}}>
         <div style={{paddingTop:'50px',paddingBottom:'50px'}}>

            <div className="element-widget-heading">
                  <h5 className="heading-title" style={headingStyle}>
                        Experience the Fitness Wave
                     <br></br>
                        At Mumbai's Friendliest Gym IN ANDHERI WEST!
                     <br></br>
                  </h5>
            </div>
            <div className="element-widget-container">
                  <h2 className="sub-heading" style={{color:'white',fontFamily: 'sans-serif',fontSize: '50px',
                     fontWeight: 'bold',
                     textTransform: 'uppercase',
                     fontStyle: 'italic',
                     lineHeight: '1.1em',
                     letterSpacing: '-1px'}}>
                     Join Fit Angle Gym Today
                  </h2>
            </div>

            <div className="gym-joining-form ">
               <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="form-fields form-inline row" style={{marginBottom:'10px',display: 'flex',justifyContent:'center'}}>

                           <div className="col-lg-3" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '200px' }}>

                              <input 
                                 type="text"
                                 id="userfirstname"
                                 class="form-control"
                                 placeholder="First Name" 
                                 {...register("userfirstname", {
                                    required:{
                                    value:true,
                                    message: 'UserFirstName is required.'
                                    }
                                 })}
                                 style={inputStyle}
                              />

                              <p style={{color:'red'}}>{errors?.userfirstname?.message}</p>
                           </div>

                           <div className="col-lg-3" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '200px' }}>

                              <input 
                                 type="text"
                                 id="userlastname"
                                 class="form-control"
                                 placeholder="Last Name" 
                                 {...register("userlastname", {
                                    required:{
                                    value:true,
                                    message: 'UserLastName is required.'
                                    }
                                 })}
                                 style={inputStyle} 
                              />

                              <p style={{color:'red'}}>{errors?.userlastname?.message}</p>
                           </div>
                           
                           <div className="col-lg-3" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '200px' }}>

                              <input 
                                 type="email" 
                                 id="email" 
                                 class="form-control"
                                 placeholder="Email"
                                 {...register("email", {
                                    required:{
                                       value:true,
                                       message: 'Email is required.'
                                    },
                                    pattern: {
                                       value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                       message: 'Invalid email format.'
                                    }
                                 })} 
                                 style={inputStyle} 
                              />

                              <p style={{color:'red'}}>{errors?.email?.message}</p>
                           </div>

                           
                           <div className="col-lg-3" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '200px' }}>

                              <input 
                                 type="tel" 
                                 id="phone" 
                                 class="form-control"
                                 placeholder="Phone Number" 
                                 {...register("phone")}
                                 style={inputStyle}
                                 {...register('phone',{
                                    required:{
                                       value:true,
                                       message:'Phone is required.'
                                    },
                                    pattern: {
                                       value:/^\d{10}$/,
                                       message:'Enter 10 digit phone number.'
                                    }
                                 })}
                              />

                              <p style={{color:'red'}}>{errors?.phone?.message}</p>
                           </div>


                           
                  </div>

                  <div className=" training-dropdown " style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom:'10px'}}>

                              <select
                              id="selecttrainingtype" 
                              class="form-control training-options"
                              defaultValue=""
                              style={{height: '40px',fontSize:'15px',width: '220px'}} 
                              {...register('trainingtype',{
                                 required:{
                                 value:true,
                                 message:'Please choose tarining type.'
                                 }
                              })}
                              >
                                 <option value="" disabled >Please choose one option</option>
                                    {trainingTypes.map((option, index) => {
                                       return (
                                             <option value={option.id} key={index}>
                                                {option?.type_name}
                                             </option>
                                       );
                                    })}
                              </select>

                              <p style={{color:'red'}}>{errors?.trainingtype?.message}</p>
                  </div>

                           <div>
                                 <button 
                                 className="getstarted-btn" 
                                 type="submit" 
                                 // onClick={()=>reset()} 
                                 style={homeButtons}
                                 disabled={showLoader}>

                                 {showLoader &&
                                    <div style={{display:'inline-block', paddingLeft: '2px',paddingRight: '4px'}}>
                                       <Circles
                                       height="18"
                                       width="18"
                                       color="#9fa3a9"
                                       ariaLabel="circles-loading"
                                       // wrapperStyle={{display:'inline-block'}}
                                       // style={{display:'inline-block'}}
                                       wrapperClass=""
                                       visible={true}
                                       />
                                    </div>
                                 }

                                 <div style={{display:'inline-block'}}>
                                    GET STARTED
                                 </div>
                              
                                 </button>
                           </div>

                  
                        <div style={{marginTop:'15px',marginBottom:'15px',display:'flex',alignItems:'center'}}> 
                           {isUserAdded && 
                            <div style={{marginLeft:'auto', marginRight:'5px'}}>
                           <Checkmark size='30px'/> 
                           <p style={{color:'white',display:'inline-block',marginRight:'auto',marginLeft:'5px'}}>We have received your request and a member of our team will get back to you soon.</p>
                           </div> 
                           }
                        </div>
                  

               </form>

            </div>

            <div className="gym-description" style={{paddingBottom:'1px'}}>

               <h4 style={{color:'white',fontFamily: 'sans-serif'}}>
                  #20Years Of Service 
                  <br></br>
                  To The Fitness & Wellness Community.
                  <br></br>
                  #hereforyou 
                  <br></br>
                  #heretostay
                  <br></br>
                  #Safesweatspace
               </h4>

            </div>
         </div>
      </div>

      <div className="extra-features-card-one" style={{display:'flex',justifyContent:'center',padding:'40px',marginTop:'75px',marginBottom:'150px'}}>
         <div className="fit-angle-personal-training" >

            <div className="section-one-personal-training" style={sectionOneStyle}>
               <div>
                  <img style={{borderRadius:'10px'}}  width="300px" height="400px" src={pTsecondaryImage}/>
               </div>
            </div>

            <div className="section-two-personalt-trai-info" style={sectionTwoSTyle}>
               <div style={{display:'flex',paddingTop:'10px'}}>
                  <p style={headingInformation}>
                      YOUR BODY & YOUR FITNESS REQUIREMENTS ARE UNIQUE. YOUR PERSONAL TRAINING SHOULD REFLECT THAT!
                  </p>
               </div>

               <div>
                  <h2 style={{textAlign:'left', color:'#FF3F0C',fontFamily: "Go Bold Sans-serif",fontSize: '50px',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px'}}>Certified Personal Trainers</h2>
               </div>

               <div style={{display:'flex',paddingTop:'10px'}}>
                  <p style={headingInformation}>
                    Get fit fast with Fit Angle's  
                    <strong>  certified personal trainers  </strong>
                     Enjoy cardio, strength, and weight training with top equipment
                     <strong> Join Now </strong>  
                     and make 'Impossible' 'I'm Possible'!               
                  </p>
               </div>

               <div className="book-free-session-button" style={{display:'flex',justifyContent:'left',marginTop:'20px'}}>
                  <div>
                     <button 
                     className="home-btn" 
                     type="submit" 
                     // onClick={()=>reset()} 
                     style={homeButtons}
                     >

                     <div style={{display:'inline-block'}}>
                        BOOK A FREE SESSION
                     </div>
                  
                     </button>
                  </div>
               </div>

            </div>

         </div>
      </div>

      <div className="extra-features-card-two" >
         <div className="fit-angle-infrastructure" >

            <div className="section-two-infrastructure" >
               <div style={{display:'flex',paddingTop:'10px'}}>
                  <p style={{color:'white',
                     textAlign:'left',
                     fontSize:'medium'}}>
                        Experience the Fitness Wave                  
                  </p>
               </div>

               <div>
                  <h2 style={{textAlign:'left', color:'#FF3F0C',fontFamily: "Go Bold Sans-serif",fontSize: '50px',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px'}}>1500 Sq.ft Open Air CrossFit Studio</h2>
               </div>

               <div style={{display:'flex',paddingTop:'10px'}}>
                  <p style={{color:'white',
                     textAlign:'left',
                     fontSize:'medium'}}>
                    Get fit fast with Fit Angle's  
                    Our rooftop open air CrossFit studio will help you push your limits and get you to your fitness goals.               
                  </p>
               </div>

               <div className="book-free-session-button" style={{display:'flex',justifyContent:'left',marginTop:'20px'}}>
                  <div>
                     <button 
                     className="home-btn" 
                     type="submit" 
                     // onClick={()=>reset()} 
                     style={homeButtons}
                     >

                     <div style={{display:'inline-block'}}>
                        JOIN TODAY
                     </div>
                  
                     </button>
                  </div>
               </div>

            </div>

            <div className="section-one-infrastructure">
               <div class="image-container">
                  <img className="image-one" src={boyCrossFit} alt="Boy CrossFit"/>
                  <img className="image-two" src={girlCrossFit} alt="Girl CrossFit"/>
               </div>
            </div>
         </div>
      </div>

      <div className="second-container" style={{marginTop:'50px',marginBottom:'30px'}}>
         <div className="content-box">
            <div className="main-content" style={{width: '100%',margin: '0 auto',paddingInlineStart: '0',paddingInlineEnd: '0',height: '100%'}}>
               <div className="constainer-headings" style={{margin:'30px'}}>
                  <div>
                     <h5 style={{ textTransform: 'capitalize',letterSpacing: 'revert-layer',fontSize: 'large', wordSpacing: 'revert'}}>EXPERIENCED & INTERNATIONALLY CERTIFIED PERSONAL TRAINERS</h5>
                  </div>

                  <div>
                     <h2 style={{fontFamily: "Go Bold Sans-serif",color:'#FF3F0C',fontSize: '40px',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px'}}>THE BEST FITNESS EXPERIENCE</h2>
                  </div>

                  <div>
                     <p>
                        <span style={{ fontSize: 'medium'}}>We're committed to bringing you the best workout experience.</span>
                     </p>
                  </div>
               </div>

               <div className="gym-amenities row" >

                  {/* <div > */}
                     {/* <figure> */}
                        <img src={bodyComposition} />
                     {/* </figure> */}

                     {/* <div>
                        <h4 style={{fontFamily: 'sans-serif'}}>Body Composition Assessment</h4>
                     </div>
                  </div> */}

                  {/* <div >
                     <figure> */}
                        <img src={sevenDays} />
                     {/* </figure>
                     <div>
                        <h4 style={{fontFamily: 'sans-serif'}}>Open 7 Days A Week</h4>
                     </div>

                  </div> */}

                  {/* <div > */}
                     {/* <figure> */}
                        <img src={parking} />
                     {/* </figure>

                     <div>
                        <h4 style={{fontFamily: 'sans-serif'}}>Complimentary Valet Parking</h4>
                     </div>

                  </div> */}

                  {/* <div >
                     <figure> */}
                        <img src={cleaning} />
                     {/* </figure>

                     <div>
                        <h4 style={{fontFamily: 'sans-serif'}}>Clean, Comfortable and Safe</h4>
                     </div>

                  </div> */}

               </div>

               <div className="join-button" style={{margin:'30px'}}>
                  <button className="home-btn" style={homeButtons}>
                        <div style={{display:'inline-block'}}>
                           JOIN TODAY
                        </div>
                  </button>

               </div>

            </div>
         </div>
      </div>

      <div className="classes-slide-show-container" style={{display:'flex',justifyContent:'center',padding:'40px',backgroundColor:'#171515 ',marginTop:'100px'}}>
         <div className="classes-available" style={{paddingTop:'95px',paddingBottom:'95px'}}>
            <div>
               <h1 style={{textAlign:'center', color:'#FF3F0C',fontFamily: "Go Bold Sans-serif",fontSize: '50px',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px'}}>EXPERIENCE FIT ANGLE GYM</h1>
            </div>

            <div style={{display:'flex',paddingTop:'10px',justifyContent:'center'}}>
               <p style={{color:'white',
                  
                  fontSize:'medium'}}>
                     Experience The Best Group Exercise Classes In Mumbai                  
               </p>
            </div>

            <div className="slideshow-container" style={{ overflow: 'hidden', maxWidth: '1000px', margin: 'auto' ,marginTop:'30px'}}>
                  <div className="carousel-track" style={{
                           display: 'flex',
                           transition: 'transform 0.5s ease-in-out',
                           position:'relative'
                        }}>
                        {getSlidingImages().map((image, index) => (
                           <div className="carousel-item " key={index} style={{  flex: `0 0 calc(100% / ${visibleSlides})`,
                           minWidth: '33.33%', boxSizing: 'border-box',marginRight:'10px' }}>
                              <a href={`/workout/classes?className=${encodeURIComponent(image.showClasses)}`}>
                                 <img className="sliding-images" src={image.showImages} style={{height: '200px', borderRadius: '10px' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
                              </a>

                           <div className="text" style={{position:'relative'}}>
                              <h2 style={{fontSize:'20px',fontWeight:'bold',fontFamily:'italic'}}>{image.showClasses}</h2>
                           </div>
                              
                           </div>
                        ))}

                        <button 
                        className="previous-class w3-button w3-display-left w3-white" 
                        style={{position:'absolute',top: '86px',left: '47px',width: '40px',
                           padding: '5px',borderRadius: '8px', 
                           left: visibleSlides === 1 ? '30%' : visibleSlides === 2 ? '10%' : '47px',
                           display: visibleSlides === 1 || visibleSlides > 1 ? 'block' : 'none' // Ensure visibility
                        }} 
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave} 
                        onClick={previousClassButton} >&#10094;</button>

                        <button 
                        className="next-class w3-button w3-display-right w3-white" 
                        style={{position:'absolute',top: '86px',left: '853px',
                           width: '40px',padding: '5px',borderRadius: '8px',
                           left: visibleSlides === 1 ? '60%' : visibleSlides === 2 ? '85%' : '853px',
                           display: visibleSlides === 1 || visibleSlides > 1 ? 'block' : 'none' // Ensure visibility
                        }} 
                        onMouseEnter={handleMouseEnter}  
                        onMouseLeave={handleMouseLeave} 
                        onClick={nextClassButton}>&#10095;</button>
                  </div>

            </div>

            <div style={{ textAlign: 'center',marginTop:'30px' }}>
                  {images.map((_, index) => (
                     <span key={index} className={`dot ${index === slideIndex ? 'round-button-active' : ''}`} />
                  ))}
            </div>
            
            <br/>

            

            <div className="book-free-session-button" style={{display:'flex',justifyContent:'center',marginTop:'20px'}}>
                  <div >
                     <a href={`/classes-page`}>
                     <button 
                     className="home-btn"
                     type="submit" 
                     // onClick={()=>reset()} 
                     style={homeButtons}
                     >

                     <div style={{display:'inline-block'}}>
                        BOOK A FREE CLASS
                     </div>
                  
                     </button>
                     </a>
                  </div>
               </div>

         </div>

      </div>
   </div>

)
    
 }

 export default Home
