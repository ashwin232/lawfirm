import React from 'react'
import icon  from '../../Assets/iconn.png'
import inst  from '../../Assets/insta.png'
import fb  from '../../Assets/fb.png'
import twit  from '../../Assets/twitter.png'
import pin  from '../../Assets/pin.png'
import Nav from '../Navb'
import './ftr.css'

export const Foot = () => {
  return (
    <div className='footcont'>
        <div className='footlogo'>
            <img src={icon} alt='icon'/>
            <Nav/>
            <div className='iconcont'>
                <img src={inst} alt='inst'/>
                <img src={fb} alt='fb'/>
                <img src={twit} alt='tweet'/>
                <img src={pin} alt='pin'/>
            </div>
        </div>
        <div className='footcnt'>
        <div>© 2020 Acme. All right reserved.</div>
        <div>Privacy Policy</div>
        <div>Terms of Service</div>
        </div>
    </div>
  )
}
