import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'


const AboutPage = () => {

  return (
      <Card>
            <div className='about'>
                <h2>About this project</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magnam libero provident soluta iure animi corporis doloremque nobis ipsa, reiciendis, possimus eos eaque pariatur modi maxime fuga voluptatem dolore repellat.</p>
                <p>
                   <Link to='/'>Back To Home</Link> 
                </p>
            </div>
      </Card>
 
  )
}

export default AboutPage