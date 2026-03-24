import React from 'react'
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi'
import { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'

const Header = () => {
    const [menuOpened , setMenuOpened] = useState(false);

    const getMenuStyle = (menuOpened) =>{
        if(document.documentElement.clientWidth <= 800)
        {
            return {right : !menuOpened && "-100%"}
        }
    }

  return (
    <section className="h-wrapper">
        {/* This are the class from index.css */}
        <div className="flexCenter paddings innerWidth h-container">
            <img src="./logo.png" alt="logo" width = {100}/>

            {/* Kaha pe bhi click karenge menu ander jayenga */}
            <OutsideClickHandler.default
                onOutsideClick={() => setMenuOpened(false)}
            >
                <div className="flexCenter h-menu"
                    style={getMenuStyle(menuOpened)}
                >
                <a href="">Residencies</a>
                
                <a href="">Our Value</a>
                <a href="">Contact Us</a>
                <a href="">Get Started</a>
                <button className='button'>
                    <a href="">Contact</a>
                </button>  
            </div>

             <div className="menu-icon" 
            onClick={()=>setMenuOpened((prev)=>!prev)}>
                <BiMenuAltRight size = {30}/>
            </div>
            </OutsideClickHandler.default>
                
        </div>

    </section>
  )
}

export default Header
