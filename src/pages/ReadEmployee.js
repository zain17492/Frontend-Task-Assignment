import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Box, Typography, Grid, TextField } from "@mui/material";

function ReadEmployee (){
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

      useEffect(()=> {
        loadEmployee();
      }, []);

      const loadEmployee=async()=>{
        const result =await axios.get(`http://localhost:9090/Employees/getEmployee/${id}`);
        setEmployee(result.data);
      };
      return(
        <React.Fragment>
          <Box display ="flex" justifyContent="center">
        <Typography variant='h5' component="div" sx={{fontWeight:'bold', color:'black'}}>Employee Details</Typography>
      </Box>
      <Grid container justifyContent="center">

        <Grid item xs={5}>
          <Box compoment= "form" sx={{p:3}} noValidate id="employee-form"></Box>
          <div className="card">
            <div className="card-header">
              Details of employee id : {employee.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Employee Name:</b>
                  {employee.ename}
                </li>
                <li className="list-group-item">
                  <b>Email:</b>
                  {employee.email}
                </li>
                <li className="list-group-item">
                  <b>Mobile No:</b>
                  {employee.phone}
                </li>
                <li className="list-group-item">
                  <b>Mobile No:</b>
                  {employee.phone}
                </li>
                <li className="list-group-item">
                  <b>Salary:</b>
                  {employee.salary}
                </li>
                <li className="list-group-item">
                  <b>Department:</b>
                  {employee.department}
                </li>
                <li className="list-group-item">
                  <b>Destination:</b>
                  {employee.des}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
       

    

</Grid>

</Grid>

</React.Fragment>
)};
export default ReadEmployee;