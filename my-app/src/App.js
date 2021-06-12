
import './App.css';

import { Button } from 'react-bootstrap';
import React, { useState, component } from 'react';
import axios from 'axios';
import Card from './components/card';
// import Navbar from './components/nav';
import {Navbar, Container} from 'react-bootstrap';



const getEmployees = () => {  
  return axios.get(`https://randomuser.me/api/?results=100`) 
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
      <Container>
        <Navbar expand="lg" variant="light" bg="warning">
        <Navbar.Brand href="#">Employee Monitor</Navbar.Brand>
        </Navbar>
        <Button onClick={() => {
        getEmployees().then(employees=>{
          setEmployeesState(employees);
        });        
      }}>Get Employees</Button>      
      {employees.results.map(employee => <Card key={employee.name} employee={employee} setEmployeesState={setEmployeesState}/>)}    
      </Container>

     
     
    </div>    
  );

};

export default App;
