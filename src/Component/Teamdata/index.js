 import React from 'react'
import Teaminfo from '../Team'
import Team1 from '../../Assets/Team1.png'
import Team2 from '../../Assets/Team2.png'
import Team3 from '../../Assets/Team3.png'
import Team4 from '../../Assets/Team4.png'
import Team5 from '../../Assets/Team5.png'
import Team6 from '../../Assets/Team6.png'
import './styles.css'

const Teamguys = () => {
  return (
    <div className='Teamcont' id='about-us'>
        <div className='Teamheading'>Our Team</div>
        <div className='details'>
            <Teaminfo image={Team1} name="Daneil Def" cases={301}/>
            <Teaminfo image={Team2} name="Sanfole" cases={850} active="active"/>
            <Teaminfo image={Team3} name="Cesforilla" cases={470} />
            <Teaminfo image={Team4} name="colleen" cases={180} />
            <Teaminfo image={Team5} name="haldone" cases={212} />
            <Teaminfo image={Team6} name="nikjeo" cases={350} />
        </div>
    </div>
  )
}

export default Teamguys