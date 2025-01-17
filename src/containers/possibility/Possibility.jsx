import React from 'react'
import './possibility.css';
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility space__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt='possibility'/>
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quis obcaecati velit minima laboriosam illo laborum error doloribus exercitationem accusantium?</p>
        <h4>Request Early Access to get Started</h4>
      </div>
    </div>
  )
}

export default Possibility