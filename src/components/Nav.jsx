import '../css/nav.css'
import { useState, useEffect } from 'react'

const Nav = () => {
  const [show, setShow] = useState(false)

  const transitionNavBar = () => {
    setShow(window.scrollY > 100 ? true : false)
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar)
    return () => window.addEventListener('scroll', transitionNavBar)
  }, [])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className='nav__content'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png'
          alt='Netflix Logo'
          className='nav__logo'
        />

        <img
          src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
          alt='profile clickeable avatar'
          className='nav__avatar'
        />
      </div>
    </div>
  )
}

export default Nav
