import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
function Protected({ component: Component, ...rest }) {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      // Fetch registered users
      axios.get('http://localhost:8000/users')
        .then(response => {
          setUsers(response.data);
        })
        .catch(error => {
          console.error('Error retrieving users:', error);
        });
    }, []);
    // if(!users){
    //     return <Navigate to='/login' replace={true}></Navigate>
    // }

    return (
    <Routes>  <Route     {...rest}
    render={(props) =>
      users ? <Component {...props} users={users} /> : <Navigate to="/login" />
    }/></Routes>)
  
            
    
    
}

export default Protected;