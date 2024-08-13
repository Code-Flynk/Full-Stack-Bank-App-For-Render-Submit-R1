import "bootstrap-icons/font/bootstrap-icons.css"
import * as Icon from 'react-bootstrap-icons';
// import { NavLink, Outlet } from "react-router-dom";



function NavBar(){
  return(

    <nav className="navbar navbar-expand-lg  text-light navbar-light bg-dark   text-light">
      <a className="navbar-brand  text-light  " href="#"><i class="bi bi-bank2"></i>MIT Full Stack Bank Exercise  <i class="bi bi-shield-fill-plus"></i></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav" title="CLICK HERE TO CREATE YOUR OWN ACCOUNT" >
          <li className="nav-item">
            <a className="nav-link  text-light" href="#/CreateAccount/"><i class="bi bi-shield-fill-plus"></i> CREATE YOUR ACCOUNT</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link text-light" href="#/login/">Login</a>
          </li> */}
          <li className="nav-item"  title="DEPOSIT HERE IF YOU HAVE AN ACCOUNT"   >
            <a className="nav-link text-light" href="#/deposit/">DEPOSIT FUNDS</a>
          </li>
          <li className="nav-item" title="WITHDRAW HERE IF YOU HAVE AN ACCOUNT" >
            <a className="nav-link text-light" href="#/withdraw/">WITHDRAW FUNDS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#/balance/">CHECK YOUR BALANCE</a>
          </li>
          <li className="nav-item"   title="THIS IS WHERE USER DATA IS STORED" >
            <a className="nav-link text-light" href="#/alldata/">ALL USER DATA</a>
          </li>     

        </ul>
      </div>
    </nav>

  );
}