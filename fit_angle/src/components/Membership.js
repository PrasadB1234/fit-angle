import React from "react";
import  membershipImage from '../assets/images/membership_page_image.webp'
import workItImage from '../assets/images/resize_height(1).jpg'
import { useForm } from "react-hook-form";
import SignUpContainer from "./SignUpContainer";

const headingStyle = {
   position: 'absolute',
   top: '40%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   zIndex: '2',
   textAlign: 'center',
}

const sectionStyle = {
    width: '70%',
    borderRadius: '8px', // Add some border-radius for a clean look
}

const sectionOneStyle = {
    width:'33%',
    borderRadius: '8px', // Add some border-radius for a clean look
}

const subHeadings = {
    color:'black',
    textAlign:'left',
    fontFamily: 'sans-serif',
    fontSize: '25px',
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

const Membership = () =>{

   const form = useForm();
   const {register, handleSubmit,reset, formState} = form;
   const {errors} =formState;
   const sectionName = { name : 'Membership'}


    const onSubmit = () =>{
        console.log('form submitted');
    }

    return(
        <div className="App">
           <div className="membership-page" style={{textAlign: 'center',color: 'white'}}>

                <div className="membership-image-container" style={{position: 'relative'}}>
                    <div>
                        <img style={{width:'100% ', height:'auto'}} src={membershipImage}/>
                    </div>

                    <div className="heading-container" >

                        <div className="page-headings-one" style={headingStyle}>
                            <div>
                                <h1 style={{ fontSize:'4vw',color:'white',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',fontFamily: 'sans-serif'}}>MEMBERSHIP</h1>
                            </div>
                        </div>

                        <div className="page-heading-two" style={{position: 'absolute',top: '45%',left: '50%',transform: 'translate(-50%, -50%)',zIndex: '2',textAlign: 'center',}}>
                            <div style={{fontSize:'1.3vw',color:'white'}}>
                            We are all about you and it's our privilege to serve you.
                            </div>
                        </div>

                    </div>
                </div>

                <div className="membership-content" style={{display:'flex',justifyContent:'center',padding:'40px'}}>
                    <div className="membership-main-content" >

                        <div className="section-two-membership" style={{wordWrap:'break-word'}}>
                            <div >
                                <h2 align='left' style={{fontFamily: 'sans-serif',fontSize: '3.5vw',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',color:'black'}}>Waves Gym: Your #SafeSweatSpace for 20 Years and Counting!</h2>
                            </div>

                            <div style={{display:'flex',paddingTop:'10px'}}>
                                <p>
                                    <strong style={{color:"black",alignItems:'flex-start'}}>Unleash Your Potential with World-Class Facilities and Expert Trainers</strong>
                                </p>
                            </div>

                            <div className="membership-advantages">
                                <h3 style={subHeadings}>🌊 A Legacy of Empowerment and Support</h3>
                                <p style={headingInformation}>For 20 years, we've been more than just a gym.
                                   We're your second home, your motivation hub, and your 
                                   cheerleaders. Our internationally certified trainers know 
                                   you by name and are committed to your unique fitness goals.</p>

                                <h3 style={subHeadings}>💪 World-Class Facilities Tailored for You</h3>
                                <p style={headingInformation}>Our newly renovated 10,000 Sq. Ft. gym floor isn't just about state-of-the-art equipment - it's
                                     about creating a space where you feel comfortable, motivated, and safe to push your limits.</p>
                                <ul style={{textAlign:'left',marginLeft:'55px',fontSize:'medium'}}>
                                    <li style={{color:'black'}}>Premium equipment from Life Fitness, Nautilus, Cybex, and Matrix</li>
                                    <li style={{color:'black'}}>Over 150 diverse group fitness classes, including Yoga, Zumba, Tabata, and Kickboxing</li>
                                    <li style={{color:'black'}}>1500 Sq. Ft. outdoor CrossFit area and TRX bands for varied workout experiences</li>
                                </ul>

                                <h3 style={subHeadings}>👥 A Community That Cares</h3>
                                <p style={headingInformation}>At Waves, you're family, not just a member number. Experience the difference with:</p>
                                <ul style={{textAlign:'left',marginLeft:'55px',fontSize:'medium'}}>
                                    <li style={{color:'black'}}>Personalized attention from trainers who understand your journey</li>
                                    <li style={{color:'black'}}>A supportive community that celebrates every achievement</li>
                                    <li style={{color:'black'}}>Exclusive amenities: new showers, steam rooms, digital lockers, and a cozy coffee cafe</li>
                                    <li style={{color:'black'}}>Convenient valet parking for a stress-free arrival</li>
                                </ul>

                                <h3 style={subHeadings}>🌟 Your Journey, Our Commitment</h3>
                                <p style={headingInformation}>Every membership includes:</p>
                                <ul style={{textAlign:'left',marginLeft:'55px',fontSize:'medium'}}>
                                    <li style={{color:'black'}}>Complimentary Fitness Assessment</li>
                                    <li style={{color:'black'}}>Personal Training session</li>
                                    <li style={{color:'black'}}>Body Composition Assessment</li>
                                </ul>

                                <h3 style={subHeadings}>🏆 ELEVATE YOUR WELLNESS JOURNEY</h3>
                                <p style={headingInformation}>Our commitment extends beyond the gym floor. 
                                 Gain unlimited access to expert-led wellness workshops, nutrition seminars,
                                 and exclusive fitness events that keep you motivated and informed on your fitness journey.</p>
                                <ul style={{textAlign:'left',marginLeft:'55px',fontSize:'medium'}}>
                                    <li style={{color:'black'}}>Interactive Q&A Sessions</li>
                                </ul>

                            </div>

                            <div style={{display:'flex', marginTop:'20px'}}>
                                <p>
                                    <strong style={{color:'black',alignItems:'flex-start'}}>
                                       Join Our Fitness Family - Flexible Membership Options Available
                                    </strong>
                                </p>
                            </div>

                            <div>
                                <h2 style={{textAlign:'left',fontFamily: 'sans-serif',fontSize: '50px',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',color:'black'}}>Ready to Begin Your Fitness Journey?</h2>
                            </div>
                        </div>

                        <div className="section-one-membership">
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
                             <h2 style={{ fontSize:'2.5vw',webkitTextStrokeWidth: '1px',strokeWidth: '1px',webkitTextStrokeColor: 'rgba(255, 255, 255, 255)',stroke: 'rgba(255, 255, 255, 255)', fontStyle:'italic'}}>WORK IT</h2>
                          </div>

                        </div>

                        <div style={{marginLeft:'17px',marginRight:'17px',backgroundColor:'black',textAlign:'left',marginTop:'0px',padding:'20px',borderBottomLeftRadius:'8px',borderBottomRightRadius:'8px'}}>
                            <h1 style={{ color: 'rgb(255, 63, 12)',fontStyle:'italic', fontSize:'2.4vw'}}>FREE TRAIL</h1>

                            <p>Call us on +91 99200 84402 to book your Free Day Pass at Waves Gym.</p>
                        </div>

                        </div>

                    </div>
                    
                </div>

           </div>
        </div>
    )
}

export default Membership