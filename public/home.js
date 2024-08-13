//IMPORTS AND DEPENDENCY 
//Import card format for styling
// import Card from "./card";
// import Home from "./home";
// import Mongodb from "./mongodb";
// import CreateAccount from "./create_account";
// import Accounts, { loader as accountsLoader } from "./accounts";
// import Transaction, { loader as transactionLoader } from "./transaction";
// import AllData from "./all_data";
// import Navbar from "./navbar";
// import ErrorPage from "./error_page";
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";





import "bootstrap-icons/font/bootstrap-icons.css"




function Home(){
  return (
    <Card
    txtcolor="success" title="Welcome To Your Bank - The People's Bank"
    header="Bad Bank: The People's Bank"
    body={(<img src="bank.png" className="img-fluid"/>)}
    text="Navigate To Your Account Using The Navigation Bar"  />    
  );  
}
//updating for better document revision tracking
export default Home;