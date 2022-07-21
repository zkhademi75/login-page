import React, { Component } from 'react';
import { Route, Routes , Navigate} from 'react-router-dom';
import SingUp from './component/SignUp';
import Login from './component/Login';


class App extends Component {
    render() {
        return (
            <div>
               <Routes>
               <Route path="/signup" element={<SingUp/>} /> 
               <Route path="/login" element={<Login/>} /> 
               <Route path="/" element={<Navigate to="/signup"/>} /> 
               </Routes>
            </div>
        );
    }
}

export default App;