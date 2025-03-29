import React from "react";
import offersImage from '../assets/images/offers_page_image.jpg'
import guestPassImage from '../assets/images/free-guest-paas-new-final.jpg'
import refferFriendImage from '../assets/images/reffer_friend_three.jpg'
import recoverImage from '../assets/images/recovery_hd_image.jpg'
import muscleReliefImage from '../assets/images/recovery-image-ori.jpg'
import startTodayImage from '../assets/images/start_today.jpg'
import coffeImage from '../assets/images/coffe_one.jpg'

const headingStyle = {
    position: 'absolute',
    top: '60%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '2',
    textAlign: 'center',
 }

const Offers = () => {
    return(
        <div className="App">
            <div className="offers-page-image">
                <div>
                  <img style={{width:'100%', height:'auto'}}  src={offersImage}/>
                </div>

                <div className="heading-container" style={headingStyle}>
                      <h1 style={{ fontSize:'4vw',color:'white',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',fontFamily: 'sans-serif'}}>OFFERS</h1>
                </div>

                <div className="page-heading-two" style={{position: 'absolute',top: '70%',left: '50%',transform: 'translate(-50%, -50%)',zIndex: '2',textAlign: 'center',}}>
                        <div style={{fontSize:'1.3vw',color:'white'}}>   
                           Our Latest Offers
                        </div>
                </div>

            </div>

            <div className="offers" style={{padding:'45px'}}>
                <div className="offers-grid" style={{margin:'5%'}}>
                    <div className="offers-grid-container" style={{paddingLeft:'4%',paddingRight:'4%'}}>
                        <div class="grid-container" >
                            <div class="grid-item" style={{borderRadius:'10px'}}>
                                {/* <article> */}
                                   <div>
                                      <a href={`/offers/special-offers?offerName=${'Navratri Offer'}`}>
                                        <img style={{borderRadius:'10px',width:'100%',height:'auto'}}  src={guestPassImage}/>
                                      </a>
                                   </div>

                                   <div>
                                     <h3 style={{ fontStyle: 'italic', color: '#FF3F0C',fontWeight: '600',fontamily: 'sans-serif'}}>NAVRATRI FITNESS OFFER: BUY 2 MONTHS, GET 1 FREE</h3>
                                   </div>
                                {/* </article> */}
                            </div>
                            <div class="grid-item" style={{borderRadius:'10px'}}>
                                {/* <article> */}
                                    <div>
                                      <a href={`/offers/special-offers?offerName=${'Reffer Friend'}`}>
                                        <img style={{borderRadius:'10px',width:'100%',height:'auto'}}  src={refferFriendImage}/>
                                      </a>
                                    </div>
                                    <div>
                                      <h3 style={{ fontStyle: 'italic', color: '#FF3F0C',fontWeight: '600',fontamily: 'sans-serif'}}>REFER A FRIEND</h3>
                                   </div>
                                {/* </article> */}
                            </div>
                            <div class="grid-item" style={{borderRadius:'10px'}}>
                                {/* <article> */}
                                    <div>
                                       <a href={`/offers/special-offers?offerName=${'Rcovery'}`}>

                                         <img style={{borderRadius:'10px',width:'100%',height:'auto'}} src={recoverImage}/>
                                        </a>
                                    </div>
                                    <div>
                                      <h3 style={{ fontStyle: 'italic', color: '#FF3F0C',fontWeight: '600',fontamily: 'sans-serif'}}>ACCELERATE RECOVERY WITH NORMATEC AIR COMPRESSION</h3>
                                   </div>
                                {/* </article> */}
                            </div>
                            <div class="grid-item" style={{borderRadius:'10px'}}>
                                {/* <article> */}
                                    <div>
                                        <a href={`/offers/special-offers?offerName=${'Muscle Relief'}`}>

                                         <img style={{borderRadius:'10px',width:'100%',height:'auto'}} src={muscleReliefImage}/>
                                        </a>
                                    </div>
                                    <div>
                                      <h3 style={{ fontStyle: 'italic', color: '#FF3F0C',fontWeight: '600',fontamily: 'sans-serif'}}>RAPID MUSCLE RELIEF</h3>
                                   </div>
                                {/* </article> */}
                            </div>
                            <div class="grid-item" style={{borderRadius:'10px'}}>
                               {/* <article> */}
                                    <div>
                                       <a href={`/offers/special-offers?offerName=${'Start Today'}`}>

                                         <img style={{borderRadius:'10px',width:'100%',height:'auto'}} src={startTodayImage}/>
                                        </a>
                                    </div>
                                    <div>
                                      <h3 style={{ fontStyle: 'italic', color: '#FF3F0C',fontWeight: '600',fontamily: 'sans-serif'}}>START TODAY AT WAVES GYM - #SAFESWEATSPACE!</h3>
                                    </div>
                                {/* </article> */}
                            </div>
                            <div class="grid-item" style={{borderRadius:'10px'}}>
                                {/* <article> */}
                                    <div>
                                      <a href={`/offers/special-offers?offerName=${'Coffee'}`}>
                                        <img style={{borderRadius:'10px',width:'100%',height:'auto'}} src={coffeImage}/>
                                       </a>
                                    </div>
                                    <div>
                                     <h3 style={{ fontStyle: 'italic', color: '#FF3F0C',fontWeight: '600',fontamily: 'sans-serif'}}>CCD COFFEE</h3>
                                   </div>
                                {/* </article> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Offers