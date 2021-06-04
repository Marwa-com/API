import React, { useEffect, useState } from "react";
import axios from 'axios';
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

const UserList = () => {
const [listOfUser, setListOfUser] = useState([]);
const [error, setError] = useState(null);
useEffect(() => {
    
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => setListOfUser(res.data))
        .catch(err => setError(err));
    
  }, []);
  return (
    <div className="App" >
        <h2  className= "list"> List Of Users : </h2>
        <div className="app" >
        {listOfUser.map(user=> (
           <div >
 
            <Card  className="mb-2">
               <Card.Header className="card_header" > <h4 >{user.id} : {user.name} </h4> </Card.Header>
               <Card.Body style={{ backgroundColor:"rgb(168, 167, 167)" }}>
               <Card.Title style={{ color:"brown" }} > <h5 > Username : {user.username} </h5> </Card.Title>
                <Card.Text>
                     <p > <span > Email </span> : {user.email} </p>
                     <p> <span > Address </span> : 
                      {user.address.street}, {''} 
                      {user.address.suite}, {''}  
                      {user.address.city} {''}
                      {user.address.zipcod} , {''} 
                      {user.address.geo.lat}, {''}
                      {user.address.geo.lng}
                     </p>
                     <p > <span > Phone </span> : {user.phone}</p>
                     <p > <span > Website </span> : {user.website}</p>
                     <p > <span > Company </span> :
                      {user.company.name} : <br/>
                      {user.company.catchPhrase}, <br/>
                      {user.company.bs}
                      </p>
                </Card.Text>
                </Card.Body>
            </Card>

        </div>
         
        ))}      
      </div>   
    </div>
  );
}
export default UserList;