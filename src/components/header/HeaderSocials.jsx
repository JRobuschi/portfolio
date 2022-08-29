import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/juan-cruz-robuschi/" target="_blank" without rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/JRobuschi" target="_blank" without rel="noreferrer"><FaGithub /></a>
      <a href="https://www.instagram.com/juancruz_chino/" target="_blank" without rel="noreferrer"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials