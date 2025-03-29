import axios from "axios";
import { createSlice,  createAsyncThunk   } from "@reduxjs/toolkit";

export const fetchTrainingTypes= createAsyncThunk("user/fetchTrainingTypes", async()=>{
    return axios.get("http://localhost:8806/api/training-types")
    .then(res=>res.data);
});

export const registerUser= createAsyncThunk("user/registerUser", async(data)=>{
    return fetch("http://localhost:8806/api/user", { 
    method:"POST",
    headers:{Accept:"application/json", "Content-Type":"application/json"} ,
    body: JSON.stringify(data)
    });
});

const userSlice = createSlice({
    name:"user",
    initialState:{
        loading:false,
        user:[],
        error:'', 
        isSuccess:''  
     },

    /// reducer call here
    extraReducers:builder=>{

        //get training types
        builder.addCase(fetchTrainingTypes.pending, state=>{
            state.loading= true
        });

        builder.addCase(fetchTrainingTypes.fulfilled, (state, action)=>{
            state.loading= false
            state.user= action.payload
            state.error=''
        });
        builder.addCase(fetchTrainingTypes.rejected,(state, action)=>{
           state.loading= false
           state.user=[]
           state.error= action.error.message
        });

        // add user 
        builder.addCase(registerUser.pending, state=>{
            state.loading= true
            state.error= ''
        });
        builder.addCase(registerUser.fulfilled, (state, action)=>{
             state.loading=false
             state.user=[]
             state.isSuccess=action.payload
        });

        builder.addCase(registerUser.rejected, (state, action)=>{
            state.loading= false
            state.user=[]
            state.error= action.error.message

        });

    }

    /// end reduce
    
})

export default userSlice.reducer; 
