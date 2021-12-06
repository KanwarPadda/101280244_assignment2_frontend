import React from 'react';
import './App.css';
import { Route,Switch} from 'react-router-dom'
import EmployeeList from './pages/Employee_List';
import AddEmployee from './pages/Employee_Add';
import ViewEmployees from './pages/Employees_View';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateEmployee from './pages/updateEmployee';


function App() {
  return (
    
    <div className="main-wrapper">
       
       
       <ToastContainer position="top-center" autoClose={2000}/>
      
    <div className="container">
         <div className="app-main">
           
                 
                    <Switch> 
                    <Route exact path = "/" component={EmployeeList}></Route>
                          <Route exact path = "/employees" component={EmployeeList}></Route>
                          <Route path = "/addEmployee" component={AddEmployee}></Route>
                          <Route path = "/viewEmployee/:id" component={ViewEmployees}></Route>
                          <Route path = "/updateEmployee/:id" component={UpdateEmployee}></Route>
                    </Switch>
                  
                   
                </div>
               
                
       </div>
       
    </div>
    
  );
}

export default App;