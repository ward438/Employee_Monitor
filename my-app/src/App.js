
import './App.css';
import { Button } from 'react-bootstrap';
import React, { useState, component } from 'react';
import axios from 'axios';
// import Mailto from 'react-mailto';




function Card(props) {  
  let email = <a href={props.employee.email} alt="Email">{props.employee.email}</a>
  let logo = `${props.employee.picture.medium}`  
  
  return (     
    <table className="card" style={{width: '20rem'}}>
      <caption>Valued Employee</caption>
      <div>
        <tr>
          <img src={logo} alt="Photo"/>         
        </tr>             
          Name:&nbsp;            
          {props.employee.name.title}.&nbsp;       
          {props.employee.name.first}&nbsp;           
          {props.employee.name.last}             
        <tr>
          Age: {props.employee.dob.age}           
        </tr>
        <tr>         
            Location: {props.employee.location.city},{props.employee.location.state}&nbsp;    
        </tr>
        <tr>                   
            {email}    
        </tr>
        <tr>          
           Cell:&nbsp; 
            {props.employee.cell}         
        </tr>
        <tr>
          LAN Line:&nbsp; 
          {props.employee.phone}
        </tr>
        <tr>        
            ID #:&nbsp; 
            {props.employee.id.name}&nbsp;-&nbsp; 
            {props.employee.id.value}        
        </tr>        
      </div>     
    </table>    
  )
};

const getEmployees = () => {  
  return axios.get(`https://randomuser.me/api/?results=100`) 
  // return axios.get(`https://randomuser.me/api/?page=${pageNum}&results=10&seed=abc`)
    .then(response => {
      return response.data;
    })             
}

function App() {
  const [employees, setEmployeesState] = useState({
    results: [],
    info: {}
  })

  return (
    <div>
      <Button onClick={() => {
        getEmployees().then(employees=>{
          setEmployeesState(employees);
        });        
      }}>Get Employees</Button>      
      {employees.results.map(employee => <Card key={employee.name} employee={employee} setEmployeesState={setEmployeesState}/>)}      
    </div>
    
  );

};

export default App;
