
import './App.css';

import { Button } from 'react-bootstrap';
import React, { useState, component } from 'react';
import axios from 'axios';
import Card from './components/card';



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
