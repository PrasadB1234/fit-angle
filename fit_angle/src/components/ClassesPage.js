import React from "react";
import classes from '../assets/images/classes-in-gym-new.jpg'
import kickBoxingImage from '../assets/images/kickboxing.jpg'
import zumbaImage from '../assets/images/zumba-fitness.jpg'
import kidsKarateImage from '../assets/images/kids-karate.jpg'
import powerYogaImage from '../assets/images/power_yoga.jpg'
import indoorCyclingImage from '../assets/images/indoor_cycling_secondary.jpg'

const headingStyle = {
    position: 'absolute',
    top: '60%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '2',
    textAlign: 'center',
 }

const ClassesPage = () => {

    return(
        <div className="App">
            <div className="offers-page-image">
                <div>
                  <img style={{width:'100%', height:'auto'}}  src={classes}/>
                </div>

                <div className="heading-container" style={headingStyle}>
                      <h1 style={{ fontSize:'4vw',color:'white',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',fontFamily: 'sans-serif'}}>CLASSES</h1>
                </div>

                <div className="page-heading-two" style={{position: 'absolute',top: '70%',left: '50%',transform: 'translate(-50%, -50%)',zIndex: '2',textAlign: 'center',}}>
                        <div style={{fontSize:'1.3vw',color:'white'}}>   
                        The best group exercise classes in Mumbai
                        </div>
                </div>

            </div>

            <div className="offers" style={{padding:'45px'}}>
                <div className="offers-grid" style={{margin:'5%'}}>
                    <div className="offers-grid-container" style={{paddingLeft:'4%',paddingRight:'4%'}}>
                        <div class="grid-container" style={{marginRight:'4%',marginLeft:'4%'}}>
                            <div class="grid-item" style={{borderRadius:'10px'}}>
                                <article>
                                   <div>
                                      <a href={`/workout/classes?className=${'Kickboxing'}`}>
                                        <img style={{borderRadius:'10px'}} width='600' height='400' src={kickBoxingImage}/>
                                      </a>
                                   </div>

                                   <div>
                                     <h3 style={{ fontStyle: 'italic', color: '#FF3F0C',fontWeight: '600',fontamily: 'sans-serif'}}>KICKBOXING</h3>
                                   </div>
                                </article>
                            </div>
                            <div class="grid-item" style={{borderRadius:'10px'}}>
                                <article>
                                    <div>
                                      <a href={`/workout/classes?className=${'Zumba'}`}>
                                        <img style={{borderRadius:'10px'}}  width='600' height='400' src={zumbaImage}/>
                                      </a>
                                    </div>
                                    <div>
                                      <h3 style={{ fontStyle: 'italic', color: '#FF3F0C',fontWeight: '600',fontamily: 'sans-serif'}}>ZUMBA FITNESS</h3>
                                   </div>
                                </article>
                            </div>
                            <div class="grid-item" style={{borderRadius:'10px'}}>
                                <article>
                                    <div>
                                       <a href={`/workout/classes?className=${'Kids Karate'}`}>

                                         <img style={{borderRadius:'10px'}} width='600' height='400' src={kidsKarateImage}/>
                                        </a>
                                    </div>
                                    <div>
                                      <h3 style={{ fontStyle: 'italic', color: '#FF3F0C',fontWeight: '600',fontamily: 'sans-serif'}}>EMPOWER KIDS: KARATE CLASSES IN ANDHERI WEST</h3>
                                   </div>
                                </article>
                            </div>
                            <div class="grid-item" style={{borderRadius:'10px'}}>
                                <article>
                                    <div>
                                        <a href={`/workout/classes?className=${'Power Yoga'}`}>

                                         <img style={{borderRadius:'10px'}} width='600' height='400' src={powerYogaImage}/>
                                        </a>
                                    </div>
                                    <div>
                                      <h3 style={{ fontStyle: 'italic', color: '#FF3F0C',fontWeight: '600',fontamily: 'sans-serif'}}>POWER YOGA</h3>
                                   </div>
                                </article>
                            </div>
                            <div class="grid-item" style={{borderRadius:'10px'}}>
                               <article>
                                    <div>
                                       <a href={`/workout/classes?className=${'Indoor Cycling'}`}>

                                         <img style={{borderRadius:'10px'}} width='600' height='400' src={indoorCyclingImage}/>
                                        </a>
                                    </div>
                                    <div>
                                      <h3 style={{ fontStyle: 'italic', color: '#FF3F0C',fontWeight: '600',fontamily: 'sans-serif'}}>SPIN YOUR WAY TO FITNESS: MUMBAI'S ULTIMATE INDOOR CYCLING EXPERIENCE!</h3>
                                    </div>
                                </article>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default ClassesPage;