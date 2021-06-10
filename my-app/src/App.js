
import './App.css';
import { ListGroupItem, ListGroup, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import axios from 'axios';


function Card(props) {
  return (
    <div className="card">
      <div>
        Name: {props.employee.name.title}. {props.employee.name.first} {props.employee.name.last}
      </div>

      <div>
        Name:       
        {props.employee.name.first} {props.employee.name.last}
      </div>
    </div>
  )
};

const getEmployees = () => {    
  return axios.get('https://randomuser.me/api/')
    .then(response => {
      console.log(response.data.results)
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
        console.log('mock - api call button')
        getEmployees().then(employees=>{
          setEmployeesState(employees);
        });        
      }}>Get Employees</Button>
      {/* UNCOMMENT THIS OUT ONCE YOU FIGURE OUT HOW TO MOVE THE GetEmpoloyees() is fixed */}
      {employees.results.map(employee => <Card key={employee.name} employee={employee} setEmployeesState={setEmployeesState} />)}
    </div>
  );

};

export default App;
