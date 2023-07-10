import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Navigate } from 'react-router-dom';
function Protected({children}) {
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
    if(!users){
        return <Navigate to='/login' replace={true}></Navigate>
    }
    return children;
            
    
    
}

export default Protected;