    import React from 'react'
    import { BsLinkedin } from 'react-icons/bs'
    import { FaGithub } from 'react-icons/fa'
    import { FiDribbble } from 'react-icons/fi'
    
    const HeaderSocials = () => {
      return (
        <div className='header__socials'>
            <a href='https://linkedin.com/in/abdallahbahrawi' target="_blank"><BsLinkedin /></a>
            <a href='https://github.com/AbdallahBahrawi' target="_blank"><FaGithub /></a>
            <a href='https://facebook.com/abod.craft.33' target="_blank"><FiDribbble /></a>
        </div>
      )
    }
    
    export default HeaderSocials