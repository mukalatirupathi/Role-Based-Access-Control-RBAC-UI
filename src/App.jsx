import React, { useState } from 'react'
import DashBoard from "./Components/DashBoard/DashBoard";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
 const[users,setusers]=useState([
  {uid:1,username:'Tirupathi', role:'Admin',permission:'Read',status:'active'},
  {uid:2,username:'chadan', role:'user',permission:'write',status:'inactive'},
  {uid:3,username:'lavanya', role:'user',permission:'write',status:'active'},
  {uid:4,username:'jagan', role:'user',permission:'write',status:'inactive'},
  
 ])
  return (
    <div>
      <DashBoard users={users}/>
    </div>
  )
}

export default App
