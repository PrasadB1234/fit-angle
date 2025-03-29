import React from "react";

const headingStyle = {
    color:'white',
    fontFamily: 'sans-serif',
    fontSize: 'larger',
    marginTop:'0px',
    marginBottom:'0px',
    paddingTop:'20px'
 }

const ThankYou = () => {

    return(

        <div className="App">
                <div className="registration-form" style={{backgroundColor:'black',borderBottom:'5px solid rgb(255,63,12)'}}>
                    <div style={{padding:'50px',marginTop:'70px',marginBottom:'70px'}}>

                        <div className="heading-container" style={{margin:"100px"}}>

                            <div className="page-headings-one" style={headingStyle}>
                                <div>
                                    <h1 style={{ fontSize:'4vw',color:'white',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',fontFamily: 'sans-serif'}}>THANK YOU</h1>
                                </div>
                            </div>

                            <div className="page-heading-two" style={{zIndex: '2',textAlign: 'center',}}>
                                <div style={{fontSize:'1.3vw',color:'white'}}>
                                A Waves Gym team member will be in touch with you shortly.
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="membership-content" style={{display:'flex',justifyContent:'center',padding:'40px'}}>
                    <div style={{marginLeft:'200px',marginRight:'200px'}}>

                        <div>
                            <h2 align='left' style={{fontFamily: 'sans-serif',fontSize: '50px',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',lineHeight: '1.1em',letterSpacing: '-1px',color:'black'}}>WELCOME TO WAVES GYM</h2>
                        </div>

                        <div style={{display:'flex',paddingTop:'10px'}}>
                            <p>
                                <strong style={{color:"black",alignItems:'flex-start'}}>Thanks for filling out the request at Waves Gym. We are thrilled you have taken this step to get on to your path to total fitness.</strong>
                            </p>
                        </div>

                        <div style={{display:'flex',paddingTop:'10px'}}>
                            <p>
                                <strong style={{color:"black",alignItems:'flex-start'}}>Waves Gym is located at 5th Floor Morya Estate, Opposite the Infiniti Mall, Andheri West, Mumbai Our operating hours are:</strong>
                            </p>
                        </div>

                        <div style={{display:'flex',paddingTop:'10px'}}>
                            <p>
                                <strong style={{color:"black",alignItems:'flex-start'}}>Our operating hours are:</strong>
                            </p>
                        </div>

                        <ul style={{textAlign:'left',marginLeft:'55px',fontSize:'medium'}}>
                            <li style={{color:'black'}}>Monday to Saturday, 6.00 am to 12.00 am.</li>
                            <li style={{color:'black'}}>Monday to Saturday, 6.00 am to 12.00 am.</li>
                        </ul>

                        <div style={{display:'flex',paddingTop:'10px'}}>
                            <p>
                                <strong style={{alignItems:'flex-start'}}>Here's the best way to reach us:</strong>
                            </p>
                        </div>

                        <div style={{marginTop:'20px'}}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15129.592067505522!2d73.7730254!3d18.5560863!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf234cb99089%3A0xad6ac64a035ac1c2!2sGold&#39;s%20Gym%20Baner!5e0!3m2!1sen!2sin!4v1727275032477!5m2!1sen!2sin" 
                             width="1300" height="500" style={{border:'0',borderRadius:'8px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                    </div>

                </div>

        </div>
    )

}

export default ThankYou;