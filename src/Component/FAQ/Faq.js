import React from 'react'
import Accordio from './Accordion'
import './Faq.css'

export const Faqs = () => {
  return (
    <div className='faqcont'>
        <div className='faqhead'>
          <div className='faqheadline'>FAQ</div>
          <div className='faqtext'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
          </div>
        </div>
        <div className='faqacccont'>
            <Accordio/>
        </div>
    </div>
  )
}
