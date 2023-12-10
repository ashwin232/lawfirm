import React from 'react'
import './intro.css';
import Ccard from '../Card';

const Intro = () => {
  return (
    <div className='introd' id='about-us'>
           <div className='introcon'>
            <div style={{width:"387px",fontSize:"54px"}}>
                Let's introduce Ourselves
            </div>
            <div className='divider'></div>
            <div style={{display:"flex",
          flexDirection:"column",
          rowGap:"2rem"}}>
              <h3 className='crime'>Criminal Lawyer</h3>
            <p className='introtext'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exercitation.</p>
            </div>
           </div>
           <div className='intro2'>
            <div className='inside'>
              Why choose us?
            </div>
            <div className='cardgroup'>
                <Ccard bgcolor='#1D1D1D' rate={98}/>
                <Ccard bgcolor='#1D1D1D' rate={100}/>
                <Ccard bgcolor='#1D1D1D' rate={100}/>
            </div>
           </div>
    </div>
  );
};

export default Intro;