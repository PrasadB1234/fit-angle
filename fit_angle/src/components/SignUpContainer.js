import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/user/UserSlice"
import { useNavigate } from "react-router-dom";

const inputStyle = {
    // marginRight: '5px',
    // marginLeft: '5px',
    height: '35px',
    width:'100%',
    fontSize:'15px'
}

const SignUpContainer = ({sectionName}) =>{
    const sectionname = sectionName.name;

    const form = useForm();
    const {register, handleSubmit,reset, formState} = form;
    const {errors} =formState;
    const dispatch = useDispatch();
    const navigate = useNavigate();

 
     const onSubmit = (data) =>{

        const formDdata =
        { 
           first_name:data.userfirstname,
           last_name : data.userlastname,
           email:data.email,
           mobile:data.phone,
           interested:data.interested === true ?  sectionname : '',
        }
  
        console.log('submit form',formDdata);
  
        try{
           const response = dispatch(registerUser(formDdata));
  
           if(response){
              // setTimeout(()=> setShowLoader(false),4000);
              reset();
              window.scrollTo(0, 0)
              navigate('/thank-you-page'); 
           }
  
        }catch(e){
           console.log('User Not Added', e);
        }
     }

    return(
        <div className="App">
            <div className="membership-form">   
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="form-fields form-inline row" style={{ margin: '-3px',padding: "14px"}} >

                        <div className="col-md-6" >
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

                        <div className="col-md-6" >
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
                                
                        <div className="col-md-12" >
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

                                
                        <div className="col-md-12" >

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

                        <div >

                            <span>

                            <input 
                            style={{width:'auto',display:'inline'}} 
                            type="checkbox"
                            id="isInterested"
                            class="form-control"
                            {...register("interested")}
                            // style={inputStyle}
                            {...register('interested',{
                                required:{
                                    value:true,
                                    message:'Please checkmark the box.'
                                },
                            })}/>
                              <p style={{color:'black',display:'inline', padding:'5px'}}>I am interested in a <strong style={{color:'black'}}>{sectionname}</strong>  at Waves Gym Andheri W, Mumbai. Please call me.</p>
                            </span>

                        </div>

                        <div >
                           <p style={{color:'red'}}>{errors?.interested?.message}</p>
                        </div>

                        <div className="submit-button" style={{flexBasis:'100%',padding:'inherit'}}>
                            <button type="submit" style={{backgroundColor:'#FF3F0C',width:'100%',minHeight:'40px',border: '2px solid rgb(244, 67, 54)',borderRadius:'5px'}}>
                                <span style={{fontFamily: 'sans-serif',fontSize: '20px',fontWeight: 'bold',textTransform: 'uppercase',fontStyle: 'italic',letterSpacing: '-0.5px'}}>SEND</span>
                            </button>
                        </div>

                    </div>

                    
                </form>

                                        {/* <div>
                                            <span></span>
                                        </div> */}

                                </div>
        </div>
    )
}

export default SignUpContainer;