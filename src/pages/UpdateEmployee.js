import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Box, Typography, Grid, TextField } from "@mui/material";


function UpdateEmployee() {
 let navigate = useNavigate();
 const {id}= useParams();
  
  const [employee,setEmployee]=useState({
    ename:"",
    email:"",
    salary:"",
    des:"",
    phone:"",
    gender:"",
    department:""
  });

  const{ename,email,phone,des,gender,salary,department}=employee;

  const onInputChange=(e)=>{
    setEmployee({...employee,[e.target.name]:e.target.value});
  };

  useEffect(()=> {
    loadEmployee();
  }, []);

  const updateEmployee= async (e)=>{
     e.preventDefault();
     await axios.put(`http://localhost:9090/Employees/updateEmployees/${id}`, employee);
     navigate("/")
  };

  const loadEmployee=async()=>{
    const result =await axios.get(`http://localhost:9090/Employees/getEmployee/${id}`);
    setEmployee(result.data);
  };
  return(
<React.Fragment>
  
<Box display ="flex" justifyContent="center">
        <Typography variant='h5' component="div" sx={{fontWeight:'bold', color:'black'}}>Update Employee</Typography>
      </Box>
      <Grid container justifyContent="center">

        <Grid item xs={5}>
          <Box compoment= "form" sx={{p:3}} noValidate id="student-form">
            <TextField id="ename" name="ename"  type="text" required fullWidth margin="normal" 
               label='Employee Name' value={ename} onChange={(e)=>onInputChange(e)}/>

            <TextField id="email" name="email"  type="email" required fullWidth margin="normal" 
               label='Email' value={email} onChange={(e)=>onInputChange(e)}/>

             <TextField id="phone" name="phone"  type="number" required fullWidth margin="normal" 
               label='Mobile No' value={phone} onChange={(e)=>onInputChange(e)}/>

               <TextField id="gender" name="gender"  type="text" required fullWidth margin="normal" 
               label='Gender' value={gender} onChange={(e)=>onInputChange(e)}/>


              <TextField id="salary" name="salary"  type="number" required fullWidth margin="normal" 
               label='Salary' value={salary} onChange={(e)=>onInputChange(e)}/>

              <TextField id="department" name="department"  type="text" required fullWidth margin="normal" 
               label='Department' value={department} onChange={(e)=>onInputChange(e)}/>
        
        <TextField id="des" name="des"  type="text" required fullWidth margin="normal" 
               label='Destination' value={des} onChange={(e)=>onInputChange(e)}/>
              

            <div className="col">
      <button onClick={updateEmployee} style={{height:"45px", width:"100px"}}
      className="btn btn-success mts-3  mb-3 ">Update</button>
        <Link to ="/"> 
    <button  style={{height:"45px", width:"100px"}} className="btn btn-dark mt-3 mb-3 ms-5" >Back</button></Link>
    
</div>  

</Box>

        </Grid>

      </Grid>
  
</React.Fragment>
)};
export default UpdateEmployee;