 import React from 'react'

const Teaminfo = ({name,image,cases,active}) => {
  return (
    <div className={`teamcardcont ${active}`}>
        <img src={image}/>
        <div className='teamsinf'>
            <div className='teamsname'>{name}</div>
            <div className='case'>{cases} cases</div>
        </div>
    </div>
  )
}

export default Teaminfo