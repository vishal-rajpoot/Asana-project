import React from 'react'
import Header from './Header'
import render from '../Components/images/render.png'

const RedirectedPage = () => {
  return (
    <div>
        <Header/>
        <h1>WELCOME TO THIS PAGE</h1>
        <img src={render} alt="" className='bg-img'/>
    </div>
  )
}

export default RedirectedPage