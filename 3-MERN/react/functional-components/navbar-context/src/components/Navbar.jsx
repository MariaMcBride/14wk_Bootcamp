import React, { useContext } from 'react'
import Context from '../context/Context';
// import styles from './Navbar.module.css';

const Navbar = (props) => {
  const { userName } = useContext(Context);
  // console.log(currentUser);

  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid d-inline-flex align-items-center justify-content-end mx-5 py-2">
        <div className="navbar-brand text-white mb-0 h1">
          {userName ? <>Hi, {userName}!</> : <>Welcome!</>}
        </div>
      </div>
    </nav>
  )
}

export default Navbar;