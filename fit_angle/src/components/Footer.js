import React from "react";

const Footer = () =>{

    return(
        <div className='App'>

            <footer class="footer" >
            {/* <div className="footer" style={footerStyle}> */}
            <div className="footer-container">
                  <div className="row">
                      <div class="footer-col">
                        <h2 style={{color:'#FF3F0C'}}>FIT ANGLE</h2>
                        <div className="column">
                            <p style={{color:'white'}}>
                              504-505, Morya Estate Commercial PRM LTD,
                              <br></br>
                              Oshiwara Link Road,
                              <br></br>
                              Andheri West, Mumbai Suburban,
                              <br></br>
                              Maharashtra, 400053
                            </p>
                            <p style={{color:'white'}}>
                              <b>Phone: </b>
                              <b> +9122 6678 7970</b>
                              <br></br>
                              <b>Email: </b>
                              info@wavesgym.com
                            </p>
                        </div>

                      </div>

                      <div class="footer-col">
                        <h2 style={{color:'#FF3F0C'}}>SITE MAP</h2>
                        <nav>
                            <ul style={{color:'white', listStyle:'none'}}>
                              <li>
                                  <h5>Member Ship</h5>
                              </li>
                              <li>
                                  <h5>Classes</h5>
                              </li>
                              <li>
                                  <h5>Offers</h5>
                              </li>
                              <li>
                                  <h5>Carrers at Wave Gym</h5>
                              </li>
                              <li>
                                  <h5>Location</h5>
                              </li>
                              <li>
                                  <h5>Terms and Conditions</h5>
                              </li>
                              <li>
                                  <h5>Member Policy</h5>
                              </li>
                            </ul>
                        </nav>

                      </div>

                      <div class="footer-col">
                        <h2 style={{color:'#FF3F0C'}}>FOLLOW US</h2>
                        {/*<p style={{color:'white'}}>
                              Instgram and Facebook
                        </p>*/}
                        <div className="social-links">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>

                        </div>
                      </div>
                  </div>
            </div>
            {/* </div> */}
          </footer>

        </div>
    )

}

export default Footer;