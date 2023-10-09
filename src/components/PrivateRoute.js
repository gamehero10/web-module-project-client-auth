import React from 'react';
import {  Navigate } from 'react-router-dom';



const PrivateRoute = (Component) => {
    const auth = false; //your logic

    return auth ? <Component /> : <Navigate to="/login" />
}


export default PrivateRoute; 