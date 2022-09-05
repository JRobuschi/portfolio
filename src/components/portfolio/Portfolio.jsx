import React from 'react'
import './portfolio.css'

import IMG2 from '../../assets/portfolio2.jpg'
import IMG6 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'


const data = [
  {
    id: 1,
    image: IMG4,
    title: 'Email notification',
    github: 'https://github.com/JRobuschi?tab=repositories',
    demo: 'https://portfolio-jrobuschi.vercel.app/#contact'
  },
  {
    id: 2,
    image: IMG6,
    title: 'Hospital App',
    github: 'https://github.com/JRobuschi/hospitalApp',
    demo: 'https://euphonious-pothos-4520ad.netlify.app/'
  },
  {
    id: 3,
    image: IMG2,
    title: 'Crypto currencey Dashboard & Financial Visualization "Coming soon"',
    github: 'https://github.com/JRobuschi?tab=repositories',
    demo: 'https://portfolio-jrobuschi.vercel.app/'
  },

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
