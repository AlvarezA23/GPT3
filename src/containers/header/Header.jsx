import React from 'react'
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 OpenAI</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ducimus fugiat voluptates corporis harum sit, aliquid eveniet eligendi delectus, voluptatibus numquam perspiciatis asperiores sapiente quam, culpa debitis. Possimus, dicta. Delectus!</p>
        
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your email address'/>
          <button type='button'>Get Started</button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt='people'/>
          <p>1,600 people requested access in last 24 hours</p>
        </div>

      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt='ai'/>
      </div>
    </div>
  )
}

export default Header