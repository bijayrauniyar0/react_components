import React from 'react'
import './Aside.css'
import { Link } from 'react-router-dom'

const Aside = (props) => {
    function toggleSidebar(section) {
        document.querySelector(".sidebar").classList.toggle('active');
        if(document.querySelector(".sidebar").classList.contains('active')){
            document.querySelector(section).classList.add('active');
        }else{
            document.querySelector(section).classList.remove('active');
        }
    }
  return (
    <>
        <div className="sidebar">
            <span id="toggle" onClick={()=>toggleSidebar(props.toggleProp)}>
                <i className="fa-solid fa-bars"></i>
            </span>
            <div className="sideMenu">
                <Link to="/">
                    <span className="side-group">
                        <i className="fa-solid fa-home"></i>
                        <span className='text'>Home</span>
                    </span>
                </Link>
                <Link to="/contact">
                    <span className="side-group">
                        <i className="fa-solid fa-home"></i>
                        <span className='text'>Contact</span>
                    </span>
                </Link>
                <Link to="">
                    <span className="side-group">
                        <i className="fa-solid fa-home"></i>
                        <span className='text'>Home</span>
                    </span>
                </Link>
               
                <Link to="">
                    <span className="side-group">
                        <i className="fa-solid fa-home"></i>
                        <span className='text'>Home</span>
                    </span>
                </Link>
               
           </div>
        </div>
    </>
  )
}

export default Aside
