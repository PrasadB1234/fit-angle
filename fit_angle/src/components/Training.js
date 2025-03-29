import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchUsers } from "../redux/actions/userActions";
import { fetchUsers } from "../redux/user/UserSlice";
import personalTrainerImage from '../assets/images/personal_train_four_.jpg'
import { useForm } from "react-hook-form";
import workItImage from '../assets/images/resize_height(1).jpg'
import pTsecondaryImage from '../assets/images/personal_trainer_secondary_image.jpg'
import SignUpContainer from "./SignUpContainer";

const headingStyle = {
  position: 'absolute',
  top: '60%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: '2',
  textAlign: 'center',
}

// const sectionStyle = {
//   width: '65%',
//   borderRadius: '8px'
// }

// const sectionOneStyle = {
//   width:'30%',
//   borderRadius: '8px', 
// }

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

const Training =()=>{ 

   const form = useForm();
   const {register, handleSubmit,reset, formState} = form;
   const {errors} =formState;
   const sectionName = { name : 'Personal Training'}



    const onSubmit = () =>{
        console.log('form submitted');
    }

  return(
      <div className="App">

        <div className="personal-training-info-page">

          <div className="personal-trainer-page-image">

            <div>
              <img style={{width:'100%',height:'auto'}} src={personalTrainerImage}/>
            </div>

            <div className="heading-container" style={headingStyle}>
                  <h1 style={{ fontSize:'4vw',color:'white',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',fontFamily: 'sans-serif'}}>PERSONAL TRAINING</h1>
            </div>

            <div className="page-heading-two" style={{position: 'absolute',top: '70%',left: '50%',transform: 'translate(-50%, -50%)',zIndex: '2',textAlign: 'center',}}>
                  <div style={{fontSize:'1.3vw',color:'white'}}>   
                      Certified Personal Trainers
                  </div>
            </div>

          </div>

          <div className="membership-content" style={{display:'flex',justifyContent:'center',padding:'40px'}}>
                <div className="personal-training-page" >

                    <div className="section-two-personal-training-page">
                        <div>
                            <h2 align='left' style={{fontFamily: 'sans-serif',fontSize: '3.8vw',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',color:'black'}}>Discover Personalized Fitness at Waves Gym</h2>
                        </div>

                        <div style={{display:'flex',paddingTop:'10px'}}>
                            <p style={headingInformation}>
                              Your fitness journey is unique. 
                              That's why at Waves Gym, our internationally certified trainers craft a 
                              personal training program tailored just for you. Accelerate your fitness 
                              and weight loss goals with our expert blend of cardio, strength training, 
                              and the latest in fitness technology.
                            </p>
                        </div>

                        <div style={{marginTop:'20px'}}>
                            <p style={{textAlign:'left'}}>
                                <strong style={{color:'black',fontSize:'larger'}}>
                                    Why Choose Waves Gym Personal Trainers?
                                </strong>
                            </p>
                            
                            <div >
                              <ul style={{textAlign:'left',marginLeft:'20px',fontSize:'medium'}}>
                                  <li style={{color:'black',marginTop:'10px'}}><strong >Customized Workouts: </strong>Tailored exercise routines to fit your individual needs.</li>
                                  <li style={{color:'black',marginTop:'10px'}}><strong>Specialized Programs: </strong> Our trainers are skilled in Special Population Training, offering services for diverse fitness needs.</li>
                              </ul>
                            </div>
                            
                        </div>

                        <div>
                            <h2 align='left' style={{fontFamily: 'sans-serif',fontSize: '4vw',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',color:'black'}}>TAKE YOUR FITNESS TO THE NEXT LEVEL WITH OUR CERTIFIED PERSONAL TRAINERS.</h2>
                        </div>

                        <div>
                          <img style={{width:'100%',height:'auto',borderRadius:'7px'}} src={pTsecondaryImage}/>
                        </div>

                        <div style={{marginTop:'20px'}}>
                          <p style={{textAlign:'left'}}>
                            <strong  style={{color:'black',fontSize:'larger'}}>
                                Elevate Your Fitness Experience
                            </strong>
                          </p>
                          <p style={headingInformation}>
                              Our trainers stay on the forefront of fitness trends, 
                              from Kettlebell techniques to CrossFit, ensuring your 
                              regimen is dynamic and effective. With our advanced tracking 
                              technology, your progress is monitored closely, adapting your 
                              plan to your evolving fitness level.
                          </p>
                        </div>

                        <div style={{marginTop:'20px'}}>
                          <p style={{textAlign:'left'}}>
                            <strong style={{color:'black',fontSize:'larger'}}>Experience the Waves Gym Difference</strong>
                          </p>

                          <p style={headingInformation}>
                            Join us for a complimentary personal training session
                            and feel the impact of dedicated, professional support. 
                            Our commitment to your health is just a conversation away.
                          </p>
                        </div>

                        <div style={{marginTop:'20px'}}>
                          <p className="get-in-touch" style={{textAlign:'left'}}>
                            <strong style={{color:'#FF3F0C',fontSize:'larger'}}>Get in Touch</strong>
                          </p>

                          <p style={headingInformation}>
                            Ready to transform the impossible into 
                            'Im' possible'? Contact us today and take 
                            the first step towards a fitter, healthier you.
                          </p>
                        </div>

                    </div>

                    <div className="section-one-personal-training-page" >
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

                </div>
          </div>

        </div>
      </div>
  )
}

export default Training;