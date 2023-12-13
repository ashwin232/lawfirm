 import React from 'react'
 import './client.css'
 import left from '../../Assets/left.png'
 import rightbt from '../../Assets/right.png'
import ClienD from '../Clientperson'
import jane from '../../Assets/jane.png'
import robert from '../../Assets/robert.png'
import Devon from '../../Assets/Devon.png'


export const Client = () => {
  return (
    <div className='clientcont'>
        <div className='clientcard'>
           <div className='clientheading'>
            What says our Happy Client?
           </div>
           <div className='clientbtn'>
            <button>
                <img src={left} alt='leftbtn'/>
            </button>
            <button className='right'>
                <img src={rightbt} alt='rghtbtn'/>
            </button>
           </div>
        </div>
        <div className='clientdata'>
          <ClienD name="Jane cooper" image={jane} alt='jane' />
          <ClienD name="Robert fox"  image={robert} alt='robert'/>
          <ClienD name="Devon Lane"  image={Devon} alt='Devon'  bgColor="#2E2E2E"/>
         </div>
    </div>
  )
}
