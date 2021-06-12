
import './App.css';

import { Button } from 'react-bootstrap';
import React, { useState, component, useReducer, useEffect } from 'react';
import axios from 'axios';
import Card from './components/card';
import Filter from './components/filter';
import {Navbar, Container} from 'react-bootstrap';



function App() {
  const [employees, setEmployeesState] = useState({
    results: [],
    info: {}
  })

  
  const getEmployees = () => {  
  return axios.get(`https://randomuser.me/api/?results=100`) 
      .then(response => {        
        setEmployeesState(response.data);          
      })             
  }

  const filteredEmployees = () => {
    return axios.get(`https://randomuser.me/api/?nat=US`) 
    .then(response => {
      return response.data;
      
    })      
  }


  useEffect(() => {
    getEmployees();  
  }, []) 
  
  return (    
    <div>  
      <Container>
        <Navbar expand="lg" variant="light" bg="warning">
        <Navbar.Brand href="#">Employee Monitor</Navbar.Brand>
        </Navbar> 
        <Button onClick={() => {
        filteredEmployees().then(employees=>{
          setEmployeesState(employees);
        });        
      }}>US Region Employee</Button>
      <Button onClick={() => {
        getEmployees()
        })
      }}>Home</Button>           
      {employees.results.map(employee => <Card key={employee.name} employee={employee} setEmployeesState={setEmployeesState}/>)}    
      
        
      </Container>

     
     
    </div>    
  );

};

export default App;
