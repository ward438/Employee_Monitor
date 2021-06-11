
import './App.css';
import { ListGroupItem, ListGroup, Button } from 'react-bootstrap';
import React, { useState, component } from 'react';
import axios from 'axios';
import { Linking } from 'react-native'




function Card(props) {  
  let logo = `${props.employee.picture.medium}`
  let email = `${props.employee.email}`
  return (    
    <table className="card" style={{width: '45rem'}}>
      <div>
        <tr>
          <img src={logo} alt="Photo"/>         
        </tr>        
        <td>Name:&nbsp;            
          {props.employee.name.title}.&nbsp;       
          {props.employee.name.first}&nbsp;           
          {props.employee.name.last}                    
        </td>             
        <tr>
          <td>Age: {props.employee.dob.age}</td>                 
        </tr>
        <tr>
          <td>
            Location: {props.employee.location.city},{props.employee.location.state}
          </td>
        </tr>
        <tr>
          <td>            
            <a href={email} alt="Email">{props.employee.email}</a>
            {/* <Button onPress={() => Linking.openURL('mailto:support@example.com') }
            title="support@example.com"/>
                      */}
          </td>
        </tr>
        <tr>
          <td>
           Cell:&nbsp; 
            {props.employee.cell}
          </td>
          <td>
           LAN Line:&nbsp; 
            {props.employee.phone}
          </td>
        </tr>
        
      </div>     
    </table>
    
    
  )
};

const getEmployees = () => {

  // let pageNum = [`${'1'}`];   
  
  return axios.get(`https://randomuser.me/api/?results=100`)
  // return axios.get(`https://randomuser.me/api/?page=${pageNum}&results=10&seed=abc`)
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
