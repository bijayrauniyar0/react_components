import React, {useState} from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'

const Nav = () => {
    const [toggle, setToggle] = useState(false)

    function toggled(){
        setToggle(!toggle)
    }
  return (
    <>
    <nav>
        <h3>Loop Verse</h3>
        <ul className='main-ul'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/product">Products</Link></li>
            <li><Link to="">Login</Link></li>
        </ul>
        <div className="toggler">
            <span id="toggled" onClick={toggled}><i className="fa-solid fa-bars"></i></span> 
        </div>
        {/* drop menu */}
        <div className={`drop-menu ${toggle ?"active":""}`}>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Contact Us</a></li>
                <li><a href="">Products</a></li>
                <li><a href="">Login</a></li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Nav
