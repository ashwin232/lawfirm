 import React from 'react'
 import './clients.css'

const ClienD = ({image,name,bgColor}) => {
  return (
    <div className='cardclient' style={{backgroundColor:bgColor}}>
          <img src={image}/> 


          <h3>{name}</h3>
          <h4 style={{lineHeight:"24px"}}>CEO of Hunt</h4>
          <p className='clienDtext'> 
           Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua
        dolor do amet sint. Velit officia</p>
             </div>
  )
}

export default ClienD