import React from 'react'
import './news.css'

export const News = () => {
  return (
    <div className='newscont'>
        <div className='newshead'>
            <div className='newstext'>
                Subscribe to our News
            </div>
            <div className='content'>
                <input type='text' placeholder='name'/>
                <input type='text' placeholder='Enter your mail'/>
                <button type='submit'>Send</button>
            </div>
        </div>
    </div>
  )
}
