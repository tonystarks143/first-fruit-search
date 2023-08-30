import React, { Component } from "react";
// Routing paths
import Person from "./Components/Dashboard/Routes/Person";
import FilterSearch from "./Components/Dashboard/Routes/FilterSearch";
import Employee from "./Components/Dashboard/Routes/Employee";
import Footer from "./Components/Dashboard/Footer";
import UserTable from "./Components/Dashboard/Routes/UserTable";
import JqueryProject from "./Components/Dashboard/Routes/JqueryProject";
import UserList from "./Components/Dashboard/Routes/userList";
import ArrayTable from "./Components/Dashboard/Routes/AntDesign";
import ContentBox from "./Components/Dashboard/ContentBox";
import Dashboard from "./Components/Dashboard/Dashboard";
import Navbar from './Components/Dashboard/Navbar';
import Tuser from "./Components/Dashboard/Routes/Tuser";
import "./App.css"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Select1 from "./Components/Dashboard/Select1";





export default class App extends Component {
  
    
  render() {

    return (
      <>
        {/* Root of Router */}
        <BrowserRouter>
          {/* Navbar */}
          <Navbar />
          {/* Container */}
          <div class="container-fluid">
            {/* Row contents */}
            <div class="row content">
              {/* Column elements */}
              <div class=" col-sm-9">
                {/* Main container for dashboard */}

                <ContentBox/>
 
                {/* Routes to different pages */}
                <Routes>
                <Route path='/' element={<Dashboard />} />

                  <Route path='/person' element={<Person />} />
                  <Route path='/employee' element={<Employee />} />
                  <Route path='/filter' element={<FilterSearch />} />
                  <Route path='/User' element={<UserTable />} />
                  <Route path='/jquery' element={<JqueryProject />} />
                  <Route path='/userlist' element={<UserList />} />
                  <Route path='/array_table' element={<ArrayTable />} />
                  <Route path="/select1" element={<Select1/>}/>
                  <Route path="/tuser" element={<Tuser/>}/>

                </Routes>
              </div>
            </div>
          </div>
       
          <footer>
            <Footer />
          </footer>
        </BrowserRouter>
      </>
    )
  }
}