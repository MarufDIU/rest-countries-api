import React, { useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const Header = () => {

  const [isDark, setIsDark] = useContext(ThemeContext)
  // if (isDark) {
  //   document.documentElement.classList.add('dark')
  // }else{
  //   document.documentElement.classList.remove('dark')
  // }
  return (
    <header className={`${isDark? 'dark': ''}`}>
        <div className="header-content container flex">
            <h2 className="title"><a href="/">Where in the world?</a></h2>
            <p className="theme-changer" onClick={()=>{
              setIsDark(!isDark)
              localStorage.setItem('isDarkMode', !isDark)
            }}><i className= {`fa-regular fa-${isDark ? 'sun': 'moon'}`} aria-hidden="true">
              </i> {isDark ? 'Light' : 'Dark'} Mode</p>
        </div>
    </header>
  )
}

export default Header