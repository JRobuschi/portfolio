import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX DESING</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>A good user experience.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Determine the interaction model.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design prototypes and wireframes.</p>
            </li>
            
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>A 100% functional page.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Own Data Base.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Crud the Users and Products.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Necessary validations that an application requires.</p>
            </li>
            
          </ul>
        </article>
        {/*WEB DEVELOPMENT*/}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Adaptable to any specific request.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Willing to make wireframes that are already armed.</p>
            </li>
            
           {/*END OF CONTENT CREATION*/} 
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services