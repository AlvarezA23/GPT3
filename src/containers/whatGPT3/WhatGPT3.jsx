import React from 'react'
import './whatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='whpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is GPT-3" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, ipsa harum. Dolorum autem incidunt, cum modi eos in blanditiis libero. Perspiciatis odit, consequatur unde sit quo ratione neque illo praesentium?"/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p> 
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbots" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque suscipit possimus iusto vero quibusdam perspiciatis tenetur deleniti blanditiis. Reiciendis, vel!"/>
        <Feature title="Knowledgebase" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque suscipit possimus iusto vero quibusdam perspiciatis tenetur deleniti blanditiis. Reiciendis, vel!"/>
        <Feature title="Education" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque suscipit possimus iusto vero quibusdam perspiciatis tenetur deleniti blanditiis. Reiciendis, vel!"/> 
      </div>
    </div>
  )
}

export default WhatGPT3