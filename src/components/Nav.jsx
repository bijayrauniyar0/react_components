import React, {useState} from 'react'
import './Nav.css'

const Nav = () => {
    const [toggle, setToggle] = useState(false)

    function toggled(){
        setToggle(!toggle)
    }
  return (
    <>
    <nav>
        <ul className='main-ul'>
            <li><a href="">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Products</a></li>
            <li><a href="">Login</a></li>
        </ul>
        <div className="toggler">
            <span id="toggled" onClick={toggled}><i class="fa-solid fa-bars"></i></span> 
        </div>
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
