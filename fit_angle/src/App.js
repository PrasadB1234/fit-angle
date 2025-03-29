import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
// import { Routes ,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Membership from './components/Membership';
import Offers from './components/Offers';
import Footer from './components/Training';
import Training from './components/Training';
import Nutrition from './components/Nutrition'
import Classes from './components/Classes'
import MultipleOffers from './components/MultipleOffers';
import ClassesPage from './components/ClassesPage';
import ThankYou from './components/ThankYou';

const App = () => {

  return(
    <BrowserRouter>
        <Navbar/>

        <Routes >
            <Route path="/" element={ <Home/> } />
            <Route path="/membership" element={ <Membership/> } />
            <Route path="/offers" element={ <Offers /> } />
            <Route path="/training" element={ <Training /> } />
            <Route path="/nutrition" element={<Nutrition/>}/>
            <Route path="/workout/classes" element={<Classes/>}/>
            <Route path="/offers/special-offers" element={<MultipleOffers/>}/>
            <Route path="/classes-page" element={<ClassesPage/>}/>
            <Route path="/thank-you-page" element={<ThankYou/>}/>
        </Routes>

        {/* Footer Section */}

        <div className='App'>
            <footer class="footer" style={{borderTop: '5px solid rgb(255,63,12)'}}>
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
                              info@fitanglegym.com
                            </p>
                        </div>

                      </div>

                      <div class="footer-col">
                        <h2 style={{color:'#FF3F0C'}}>SITE MAP</h2>
                        <nav>
                            <ul style={{color:'white', listStyle:'none'}}>

                              <a href='/membership'>
                                <li>
                                    <h5>Member Ship</h5>
                                </li>
                              </a>

                              <a href='/classes-page'>
                                <li>
                                    <h5>Classes</h5>
                                </li>
                              </a>

                              <a href='/offers/special-offers'>
                                <li>
                                    <h5>Offers</h5>
                                </li>
                              </a>

                              <a>
                                <li>
                                    <h5>Carrers at Wave Gym</h5>
                                </li>
                              </a>

                              <a>
                                <li>
                                    <h5>Location</h5>
                                </li>
                              </a>

                              <a>
                                <li>
                                    <h5>Terms and Conditions</h5>
                                </li>
                              </a>

                              <a>
                                <li>
                                    <h5>Member Policy</h5>
                                </li>
                              </a>
                              
                            </ul>
                        </nav>

                      </div>

                      <div class="footer-col">
                        <h2 style={{color:'#FF3F0C'}}>FOLLOW US</h2>

                        <div className="social-links">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>

                        </div>
                      </div>
                  </div>
            </div>
          </footer>
        </div>

        
    </BrowserRouter>
  )
  
}

export default App;
