import React from "react";
import kickBoxingImage from '../assets/images/kickboxing.jpg'
import zumbaImage from '../assets/images/zumba-fitness.jpg'
import kidsKarateImage from '../assets/images/kids-karate.jpg'
import powerYogaImage from '../assets/images/power_yoga.jpg'
import indoorCyclingImages from '../assets/images/indoor-cycling-two.jpg'
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import workItImage from '../assets/images/resize_height(1).jpg'
import zumbaSecondaryImage from '../assets/images/zumbaSecondaryImage.jpg'
import kickBoxingSecondaryImage from '../assets/images/kickboxingSecondaryImage.jpg'
import powerYogaSecondaryImage from '../assets/images/power_yoga_secondary_image.jpg'
import indoorCyclingImage from '../assets/images/indoor_cycling_secondary.jpg'
import SignUpContainer from "./SignUpContainer";

const headingStyle = {
    position: 'absolute',
    top: '60%',
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
    { name: "Kickboxing", image: kickBoxingImage, mainHeading:'KICKBOXING', subHeading:'Whack them Fitness Struggles and Grow Strong!' },
    { name: "Zumba", image: zumbaImage ,mainHeading:'ZUMBA FITNESS' , subHeading:'Join Waves Gym Zumba Fitness —where every beat drops calories & lifts spirits in our dance party!'},
    { name: "Kids Karate", image: kidsKarateImage  , mainHeading:'EMPOWER KIDS: KARATE CLASSES IN ANDHERI WEST', subHeading:'Kids Karate Classes (Ages 6-12) at Waves Gym, Andheri West' },
    { name: "Power Yoga", image: powerYogaImage , mainHeading:'POWER YOGA' ,subHeading:'The holistic way to deal with stress and fitness!'},
    { name: "Indoor Cycling", image: indoorCyclingImages , mainHeading:'MUMBAIS ULTIMATE INDOOR CYCLING EXPERIENCE!', subHeading:'Burn 700cal with Mumbais best Indoor Cycling Party!'}
];

const Classes = () =>{

   const location = useLocation(); // To access the current URL

   // Extract the query parameter 'classIndex' from the URL
   const searchParams = new URLSearchParams(location.search);
   const className = searchParams.get('className');

   const selectedClass = images.find((item)=> item.name.substring(0,3).toLocaleLowerCase() === className.substring(0,3).toLocaleLowerCase());

   const sectionName = { name : className}

   const form = useForm();
   const {register, handleSubmit,reset, formState} = form;
   const {errors} =formState;

    const onSubmit = () =>{
        console.log('form submitted');
    }

    return(
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

                            {selectedClass.name == 'Kickboxing' ? (
                                <div>
                                    <div>
                                        <h2 align='left' style={{fontFamily: 'sans-serif',fontSize: '50px',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',color:'black'}}>KICKBOXING CLASSES</h2>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={headingInformation}>
                                        Kickboxing is a blend of the best of self-defense and combat sports. Evolved from Karate, this is mostly practiced for self-defense, fitness, and also as a sport. 
                                        </p>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={headingInformation}>
                                        Reach your fitness goals faster and grow stronger with our Kickboxing classes. 
                                        </p>
                                    </div>

                                    <div style={{marginTop:'20px'}}>
                                        <p style={{textAlign:'left'}}>
                                            <strong style={{color:'black',fontSize:'larger'}}>
                                            BENEFITS:
                                            </strong>
                                        </p>
                                        
                                        <div >
                                        <ul style={{textAlign:'left',marginLeft:'30px',fontSize:'medium'}}>
                                            <li style={{color:'black',marginTop:'10px'}}>Reduces Stress and boosts confidence</li>
                                            <li style={{color:'black',marginTop:'10px'}}>Reduces belly fat, eventually reducing the risk of heart disease and diabetes</li>
                                            <li style={{color:'black',marginTop:'10px'}}>Improves Hand-Eye Coordination</li>
                                            <li style={{color:'black',marginTop:'10px'}}>Improves core strength and muscle strength</li>
                                            <li style={{color:'black',marginTop:'10px'}}>Builds faster reflexes and improves balance</li>

                                        </ul>
                                        </div>
                                        
                                    </div>

                                    <div style={{marginTop:'20px'}}>
                                        <p style={{textAlign:'left'}}>
                                            <strong style={{color:'black',fontSize:'larger'}}>
                                            WHY WAVES?
                                            </strong>
                                        </p>
                                        
                                        <div >
                                        <ul style={{textAlign:'left',marginLeft:'30px',fontSize:'medium'}}>
                                            <li style={{color:'black',marginTop:'10px'}}>Experienced and certified instructors</li>
                                            <li style={{color:'black',marginTop:'10px'}}>Dedicated spacious group fitness studio </li>
                                        </ul>
                                        </div>
                                        
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={headingInformation}>
                                        Come, learn how to defend yourself! Give our FREE trial class a go. 
                                        </p>
                                    </div>

                                    <div>
                                     <img style={{width:'100%',height:'auto',borderRadius:'7px'}} src={kickBoxingSecondaryImage}/>
                                    </div>

                                    

                                </div>):''
                            }

                            {selectedClass.name == 'Zumba' ? (
                                <div>
                                    <div>
                                        <h2 align='left' style={{fontFamily: 'sans-serif',fontSize: '50px',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',color:'black'}}>GET FIT WITH FUN - JOIN OUR ZUMBA FITNESS PARTY AT WAVES GYM!</h2>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={headingInformation}>
                                          Experience a blast of energy and joy with each dance move in our dynamic Zumba classes. Our workout is more than just exercise; it's a celebration with pulsating beats and vibrant dance styles, including Salsa, Merengue, Tango, Hip-Hop, and Bollywood. Unleash your potential and dance away the calories. 
                                        </p>
                                    </div>

                                    <div style={{marginTop:'20px'}}>
                                        <p style={{textAlign:'left'}}>
                                            <strong style={{color:'black',fontSize:'larger'}}>
                                             Top Benefits of Our Zumba Classes:
                                            </strong>
                                        </p>
                                        
                                        <div >
                                        <ul style={{textAlign:'left',marginLeft:'30px',fontSize:'medium'}}>
                                            <li style={{color:'black'}}>Maximum Calorie Burning</li>
                                            <li style={{color:'black'}}>Comprehensive Body Toning</li>
                                            <li style={{color:'black'}}>Enhanced Coordination</li>
                                            <li style={{color:'black'}}>Boosted Endurance & Posture</li>
                                            <li style={{color:'black'}}>Elevated Mood & Positivity</li>

                                        </ul>
                                        </div>
                                        
                                    </div>

                                    <div style={{marginTop:'20px'}}>
                                        <p style={{textAlign:'left'}}>
                                            <strong style={{color:'black',fontSize:'larger'}}>
                                             Why Choose FIT ANGLE Gym for Zumba?  
                                            </strong>
                                        </p>
                                        
                                        <div>
                                            <ul style={{textAlign:'left',marginLeft:'30px',fontSize:'medium'}}>
                                                <li style={{color:'black'}}>Certified, Passionate Instructors</li>
                                                <li style={{color:'black'}}>Welcoming Classes for All Levels</li>
                                                <li style={{color:'black'}}>EState-of-the-Art Dance Studio</li>
                                            </ul>
                                        </div>
                                        
                                    </div>

                                    <div>
                                    <img style={{width:'100%',height:'auto',borderRadius:'7px'}} src={zumbaSecondaryImage}/>
                                    </div>

                                    <div style={{marginTop:'20px'}}>
                                        <div>
                                            <h2 align='left' style={{fontFamily: 'sans-serif',fontSize: '40px',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',color:'black'}}>IGNITE YOUR FITNESS JOURNEY!</h2>
                                        </div>
                                        <p style={headingInformation}>
                                            At Waves Gym, our Zumba Fitness classes are your ultimate Happy Hour. It’s time to elevate your heart rate and joy with our expert instructors. Wave goodbye to calories and say hello to a healthier, happier you!
                                        </p>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={headingInformation}>
                                        Join us now and feel the rhythm of fitness like never before! 
                                        </p>
                                    </div>

                                </div>):''
                            }

                            {selectedClass.name == 'Power Yoga' ? (
                                <div>
                                    <div>
                                        <h2 align='left' style={{fontFamily: 'sans-serif',fontSize: '50px',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',color:'black'}}>POWER YOGA</h2>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={headingInformation}>
                                          Power Yoga at Waves Gym is an intense workout that will exercise your sweat glands to their full potential! 
                                        </p>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={headingInformation}>
                                         You not only burn an insane amount of calories here but also improve flexibility, body balance, and core strength. After the 60-minute class, you'll definitely leave with a positive glow on your face and skip in your step! 
                                        </p>
                                    </div>

                                    <div style={{marginTop:'20px'}}>
                                        <p style={{textAlign:'left'}}>
                                            <strong style={{color:'black',fontSize:'larger'}}>
                                             BENEFITS:
                                            </strong>
                                        </p>
                                        
                                        <div >
                                            <ul style={{textAlign:'left',marginLeft:'30px',fontSize:'medium'}}>
                                                <li style={{color:'black'}}>Promotes weight loss and metabolism</li>
                                                <li style={{color:'black'}}>Improves muscle tone, mood, and quality of sleep</li>
                                                <li style={{color:'black'}}>Builds concentration and memory</li>
                                                <li style={{color:'black'}}>Builds confidence</li>
                                                <li style={{color:'black'}}>Improves bone density and flexibility</li>
                                                <li style={{color:'black'}}>Improves lung capacity and increases blood flow</li>
                                            </ul>
                                        </div>
                                        
                                    </div>

                                    <div style={{marginTop:'20px'}}>
                                        <p style={{textAlign:'left'}}>
                                            <strong style={{color:'#FF3F0C',fontSize:'larger'}}>
                                            WHY FIT ANGLE ?
                                            </strong>
                                        </p>
                                        
                                        <div >
                                        <ul style={{textAlign:'left',marginLeft:'30px',fontSize:'medium'}}>
                                            <li style={{color:'black'}}>Certified experienced instructors</li>
                                            <li style={{color:'black'}}>Beginner-friendly classes </li>
                                            <li style={{color:'black'}}>Dedicated group fitness class studio </li>
                                        </ul>
                                        </div>
                                        
                                    </div>

                                    <div>
                                     <img style={{width:'100%',height:'auto',borderRadius:'7px'}} src={powerYogaSecondaryImage}/>
                                    </div>

                                    <div style={{marginTop:'20px'}}>

                                        <p style={{textAlign:'left'}}>
                                            <strong style={{color:'black',fontSize:'larger'}}>
                                            POWER UP WITH POWER YOGA!
                                            </strong>
                                        </p>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={headingInformation}>
                                          Lift your spirit, build your body and relax your mind with yoga at Waves Gym.
                                        </p>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={headingInformation}>
                                          Sign up for a FREE trial class NOW! For any further queries, please feel free to get in touch with us.
                                        </p>
                                    </div>

                                    

                                </div>):''
                            }

                            {selectedClass.name == 'Kids Karate' ? (
                                <div>
                                    <div>
                                        <h2 align='left' style={{fontFamily: 'sans-serif',fontSize: '50px',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',color:'black'}}>EMPOWER YOUR CHILD WITH KIDS KARATE CLASSES IN ANDHERI WEST</h2>
                                    </div>

                                    <div>
                                        <h2 align='left' style={{fontFamily: 'sans-serif',fontSize: '40px',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',color:'black'}}>JOIN OUR WEEKEND KARATE SESSIONS AT WAVES GYM FOR AGES 6-12</h2>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={headingInformation}>
                                        🌟 Give your child the opportunity to build confidence, discipline, and fitness through our<strong> Kids Karate Classes in Andheri West!</strong> At Waves Gym, we're excited to offer weekend karate classes specially designed for children aged 6 to 12 years old. 
                                        </p>
                                    </div>

                                    <div>
                                        <h2 align='left' style={{fontFamily: 'sans-serif',fontSize: '50px',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',color:'black'}}>MEET SENSEI AKASH KESARKAR</h2>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={headingInformation}>
                                           Your child will learn from an exceptional martial artist with an impressive track record: 
                                        </p>
                                    </div>

                                    <div style={{marginTop:'20px'}}>
                                        
                                        <div >
                                            <ul style={{textAlign:'left',marginLeft:'30px',fontSize:'medium'}}>
                                                <li style={{color:'black'}}>2nd Dan Black Belt 🥋</li>
                                                <li style={{color:'black'}}>Represented India in World Cup 2017 - 2nd Place 🌎🏆</li>
                                                <li style={{color:'black'}}>National Medalist 7 Times 🏅</li>
                                                <li style={{color:'black'}}>State Medalist 10 Times 🏅</li>
                                                <li style={{color:'black'}}>Referee in KUDO International Federation of India</li>
                                                <li style={{color:'black'}}>13 Years of Martial Arts Experience</li>
                                            </ul>
                                        </div>
                                        
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={headingInformation}>
                                        Sensei Akash Kesarkar brings his passion and expertise to every class, creating an engaging and supportive environment where your child can thrive.                                        </p>
                                    </div>

                                    <div>
                                        <h2 align='left' style={{fontFamily: 'sans-serif',fontSize: '50px',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',color:'black'}}>CLASS SCHEDULE</h2>
                                    </div>

                                    <div style={{marginTop:'20px'}}>

                                        <div >
                                            <ul style={{textAlign:'left',marginLeft:'30px',fontSize:'medium'}}>
                                                <li style={{color:'black',marginTop:'10px'}}><strong>Days: </strong>Saturday and Sunday</li>
                                                <li style={{color:'black',marginTop:'10px'}}><strong>Time:</strong>10:30 AM to 11:30 AM</li>
                                                <li style={{color:'black',marginTop:'10px'}}><strong>Age Group: </strong> 6 Years to 12 Years </li>
                                            </ul>
                                        </div>

                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={headingInformation}>
                                         Our convenient weekend classes make it easy to fit karate into your family's busy schedule.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 align='left' style={{fontFamily: 'sans-serif',fontSize: '50px',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',color:'black'}}>BENEFITS OF KARATE FOR KIDS</h2>
                                    </div>

                                    <div style={{marginTop:'20px'}}>

                                        <div >
                                            <ul style={{textAlign:'left',marginLeft:'30px',fontSize:'medium'}}>
                                                <li style={{color:'black'}}>🥋 Builds Confidence and Self-Esteem</li>
                                                <li style={{color:'black'}}>🥋 Enhances Focus and Discipline</li>
                                                <li style={{color:'black'}}>🥋 Improves Physical Fitness and Coordination </li>
                                                <li style={{color:'black'}}>🥋 Teaches Respect and Self-Control</li>
                                            </ul>
                                        </div>

                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={headingInformation}>
                                         Karate is more than just a martial art; it's a way to equip your child with life skills that extend beyond the dojo.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 align='left' style={{fontFamily: 'sans-serif',fontSize: '50px',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',color:'black'}}>ABOUT WAVES GYM</h2>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={headingInformation}>
                                        <strong>FIT ANGLE Gym </strong>has been a cornerstone of fitness in Mumbai for 20 years. Located in the vibrant core of Andheri West, our 10,000 sq.ft. facility offers:                                        </p>
                                    </div>

                                    <div style={{marginTop:'20px'}}>

                                        <div >
                                            <ul style={{textAlign:'left',marginLeft:'30px',fontSize:'medium'}}>
                                                <li style={{color:'black'}}>State-of-the-Art Facilities</li>
                                                <li style={{color:'black'}}>Internationally Certified Trainers</li>
                                                <li style={{color:'black'}}>Safe and Nurturing Environment</li>
                                                <li style={{color:'black'}}>Community-Focused Atmosphere</li>
                                            </ul>
                                        </div>

                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={headingInformation}>
                                         We are committed to your child's well-being and personal growth.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 align='left' style={{fontFamily: 'sans-serif',fontSize: '50px',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',color:'black'}}>SIGN UP TODAY!</h2>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={headingInformation}>
                                         Don't miss out on this exciting opportunity to empower your child. Spaces are limited!
                                        </p>
                                    </div>

                                </div>):''
                            }

                            {selectedClass.name == 'Indoor Cycling' ? (
                                <div>
                                    <div>
                                        <h2 align='left' style={{fontFamily: 'sans-serif',fontSize: '50px',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',color:'black'}}>RIDE THE WAVE TO FITNESS WITH MUMBAI'S PREMIER INDOOR CYCLING EXPERIENCE!</h2>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <p style={headingInformation}>
                                        Elevate your workout routine with Mumbai's elite cycling classes, designed for every body type and fitness level. Our dynamic instructors lead exhilarating classes that combine the thrill of a dance party with the benefits of a high-intensity cycle workout. Get ready to pedal your way to peak fitness with our community of passionate riders!
                                        </p>
                                    </div>

                                    <div style={{marginTop:'20px'}}>
                                        <p style={{textAlign:'left'}}>
                                            <strong style={{color:'black',fontSize:'larger'}}>
                                             🎉 What's Waiting for You:
                                            </strong>
                                        </p>
                                        
                                        <div >
                                        <ul style={{textAlign:'left',marginLeft:'30px',fontSize:'medium'}}>
                                            <li style={{color:'black'}}>Heart-pumping, calorie-torching workouts</li>
                                            <li style={{color:'black'}}>Expert instructors to guide your ride</li>
                                            <li style={{color:'black'}}>State-of-the-art spinning studio</li>
                                            <li style={{color:'black'}}>Energizing music to fuel your motivation</li>
                                        </ul>
                                        </div>
                                        
                                    </div>

                                    <div style={{marginTop:'20px'}}>
                                        <p style={{textAlign:'left'}}>
                                            <strong style={{color:'black',fontSize:'larger'}}>
                                              💯 Perfect for ALL Fitness Levels!
                                            </strong>
                                        </p>
                                    </div>

                                    <div style={{marginTop:'20px'}}>
                                        <p style={{textAlign:'left'}}>
                                            <strong style={{color:'black',fontSize:'larger'}}>
                                              🏋️‍♀️ Benefits That'll Keep You Spinning:  
                                            </strong>
                                        </p>
                                        
                                        <div>
                                            <ul style={{textAlign:'left',marginLeft:'30px',fontSize:'medium'}}>
                                                <li style={{color:'black'}}>Boost cardiovascular health</li>
                                                <li style={{color:'black'}}>Sculpt lean muscles</li>
                                                <li style={{color:'black'}}>Torch fat and manage weight</li>
                                                <li style={{color:'black'}}>Reduce stress and elevate mood</li>
                                            </ul>
                                        </div>
                                        
                                    </div>

                                    <div style={{marginTop:'20px'}}>
                                        <p style={{textAlign:'left'}}>
                                            <strong style={{color:'black',fontSize:'larger'}}>
                                              🏆 Why Choose Waves Gym?
                                            </strong>
                                        </p>
                                        
                                        <div>
                                            <ul style={{textAlign:'left',marginLeft:'30px',fontSize:'medium'}}>
                                                <li style={{color:'black'}}>20 years of fitness excellence</li>
                                                <li style={{color:'black'}}>Certified, passionate coaches</li>
                                                <li style={{color:'black'}}>Cutting-edge spinning bikes</li>
                                                <li style={{color:'black'}}>Immersive, high-energy atmosphere</li>
                                            </ul>
                                        </div>
                                        
                                    </div>

                                    <div style={{marginTop:'20px'}}>
                                        
                                        <p style={headingInformation}>
                                         👥 Join Our Community of Riders! Experience the thrill of a dance party combined with an intense workout.
                                        </p>
                                    </div>

                                    <div style={{marginTop:'20px'}}>
                                        
                                        <p style={headingInformation}>
                                        <strong>🎁 Limited Time Offer: </strong> Book your FREE trial class today and feel the Waves difference!                                        </p>
                                    </div>

                                    <div>
                                      <img style={{width:'100%',height:'auto',borderRadius:'7px'}} src={indoorCyclingImage}/>
                                    </div>

                                    <div style={{display:'flex',paddingTop:'10px'}}>
                                        <strong>
                                        Join the Waves Gym family and ride your way to a healthier you! 🌊💪
                                        </strong>
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

export default Classes;