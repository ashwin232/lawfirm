 import React from 'react';
 import img from '../../Assets/profilepic.png'
 import './hero.css'

const hero =() => {
  return (
    <div className='container' id='main'>
          <div className='outer'>
              <div className='innrtext'>
                  You Dont have to Fight Them Alone
              </div>
              <div className='paragraph'>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
                  curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
                  hac massa gravida arcu interdum proin curae.
              </div>
              <div className='email'>
                  <input type="text" placeholder='Enter Email Address' />
                  <button>Let's Talk</button>
              </div>
          </div>
      
      
      <div className='heroimg'>
              <div className='background'></div>
              <img src={img} alt='img' className='lawyer'/>
          </div>
        </div>
  );
}


export default hero;