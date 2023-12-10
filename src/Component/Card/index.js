import React from 'react'
import gift from '../../Assets/Gift 1.png'
import './card.css'

const Ccard = ({bgcolor,rate}) => {
  return (
    <div className='cards' style={{backgroundColor:bgcolor}}>
        <div className='cardimg'>
            <img src={gift} alt='gift'/>
        </div>
        <h3>{rate}% Success rate</h3>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer.</p>
        <button><h4>Read more</h4></button>
    </div>
  )
}

export default Ccard;