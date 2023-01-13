import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
   
  return (
        <nav className='navbar'>
            <div className='navbar-container' >
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    TRVL <i className='logo' />
                </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className= {click ? 'fa-solid fa-x' : 'fa-solid fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/book' className='nav-links' onClick={closeMobileMenu}>
                        Book
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                        About
                    </Link>
                </li>
            </ul>
            </div>
        </nav>
  )
}

export default Navbar