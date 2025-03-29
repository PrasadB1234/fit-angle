import React from "react";
import nutritionImage from '../assets/images/nutrtion_image_recent.jpg'
import { useForm } from "react-hook-form";
import workItImage from '../assets/images/resize_height(1).jpg'
import pTsecondaryImage from '../assets/images/fitness_aassesment_image.jpg'
import SignUpContainer from "./SignUpContainer";


const headingStyle = {
    position: 'absolute',
    top: '60%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '2',
    textAlign: 'center',
  }
  
  const sectionStyle = {
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

const Nutrition = () =>{

   const form = useForm();
   const {register, handleSubmit,reset, formState} = form;
   const {errors} =formState;
   const sectionName = { name : 'Nutrition'}


    const onSubmit = () =>{
        console.log('form submitted');
    }

    return(
        <div className="App">
            <div className="nutrition-page">
                <div className="nutrition-image-container">
                    <div>
                        <img style={{width:'100%',height:'auto'}} src={nutritionImage}/>
                    </div>

                    <div className="heading-container" style={headingStyle}>
                      <h1 style={{ fontSize:'4vw',color:'white',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',fontFamily: 'sans-serif'}}>NUTRITION</h1>
                    </div>

                    {/* <div className="page-heading-two" style={{position: 'absolute',top: '70%',left: '50%',transform: 'translate(-50%, -50%)',zIndex: '2',textAlign: 'center',}}>
                        <div style={{fontSize:'1.3vw',color:'white'}}>   
                            Certified Personal Trainers
                        </div>
                    </div> */}

                </div>

               <div className="membership-content" style={{display:'flex',justifyContent:'center',padding:'40px'}}>
                    <div className="nutrition-page-content" >

                        <div className="section-two-nutrition-page" >
                            <div>
                                <h2 align='left' style={{fontFamily: 'sans-serif',fontSize: '4.5vw',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',color:'black'}}>BODY COMPOSITION ASSESSMENT
                                DIVE DEEPER INTO WHAT MAKES YOU YOU</h2>
                            </div>

                            <div style={{marginTop:'20px'}}>
                                <p style={{textAlign:'left'}}>
                                    <strong style={{color:'black',fontSize:'medium'}}>
                                    Transform Your Health with a Complimentary Consultation & InBody Assessment!
                                    </strong>
                                </p>
                                
                            </div>

                            <div style={{textAlign:'left'}}>
                                <em style={{fontSize:'17px'}}>✨ Secure Your Exclusive Offer Now - Call +91 99200 84402! ✨</em>
                            </div>

                            <div className="mt-2 mb-2" style={{marginTop:'20px',marginBottom:'20px'}}>
                                <ul style={{textAlign:'left',marginLeft:'20px',fontSize:'medium'}}>
                                    <li style={{color:'black',marginTop:'10px'}}><strong >Unlock the Mystery of Your Body: </strong>Embark on a journey to better health with a complimentary InBody assessment. Discover the intricate details of your body's composition—muscle, fat, and water balance. It's your first step towards a tailored health and fitness plan.</li>
                                    <li style={{color:'black',marginTop:'10px'}}><strong>Meet Afshin, Your Nutrition Guru: </strong> Afshin, our expert registered dietitian, is not just another nutritionist; she's a guide to your personalized health route. She'll provide you with a bespoke nutrition plan that aligns with your unique InBody results.</li>
                                    <li style={{color:'black',marginTop:'10px'}}><strong>Tailored Just for You: </strong> Enjoy a one-on-one consultation with Afshin, who brings compassion and expertise to your nutrition and health challenges. Whether it's managing your weight, overcoming food intolerances, or navigating chronic conditions, she's there to craft a plan that works for you.</li>
                                    <li style={{color:'black',marginTop:'10px'}}><strong>A Holistic Approach to Wellness:  </strong> Combine the power of the InBody assessment with Afshin's nutritional insights for a comprehensive view of your health. It's a collaborative effort to ensure your wellness strategy is as multifaceted as you are.</li>
                                    <li style={{color:'black',marginTop:'10px'}}><strong>Dive into the Science Behind Your Health: </strong> Curious about how the InBody Body Composition Assessment technology works? Visit www.inbodyusa.com for an in-depth look at the cutting-edge tool that will become a cornerstone of your health journey.</li>
                                </ul>
                            </div>

                            <div>
                                <img style={{width:'100%',height:'auto',borderRadius:'7px'}} src={pTsecondaryImage}/>
                            </div>

                            {/* <div style={{textAlign:'left'}}>
                                <em style={{fontSize:'17px'}}>✨ Secure Your Exclusive Offer Now - Call +91 99200 84402! ✨</em>
                            </div> */}

                            <div style={{marginTop:'20px'}}>
                                <p style={{textAlign:'left'}}>
                                <strong  style={{color:'black',fontSize:'larger'}}>
                                ✨ Don't Wait, Your Path to Health Starts Here! ✨
                                </strong>
                                </p>
                                <p style={headingInformation}>
                                Ready to take the first step? Reach out to us at +91 99200 84402 and claim your complimentary consultation and InBody assessment with Afshin.
                                It's time to embark on your path to wellness with confidence and clarity.
                                </p>
                            </div>

                            <div style={{marginTop:'20px'}}>
                                <p style={headingInformation}>
                                Your journey to wellness is unique, and at Waves Gym, we're excited to be part of your voyage. 
                                </p>
                            </div>

                            <div>
                            <iframe width="100%" height="500px" src="https://www.youtube.com/embed/AkxzJffdGBE" style={{marginTop:'20px', border:'0',borderRadius:'8px'}}></iframe>
                            </div>

                            

                        </div>

                        <div className="section-one-nutrition-page" >
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

export default Nutrition;