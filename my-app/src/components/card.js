
import '../App.css';
import React from 'react';


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
            <th>                        
            {props.employee.name.title}.&nbsp;       
            {props.employee.name.first}&nbsp;           
            {props.employee.name.last}
            </th>              
          <tr>
            Age: {props.employee.dob.age}           
          </tr>
          <tr>         
              Location: {props.employee.location.city},{props.employee.location.state},    
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

  export default Card;
  

  