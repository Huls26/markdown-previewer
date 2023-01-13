import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMaximize, faDownLeftAndUpRightToCenter } from '@fortawesome/free-solid-svg-icons';

export default function index({title, targetSection, onchange, isMaximize}) {
  const maximizeMinimize = isMaximize[targetSection];

  return (
    <div id='title-bar' className='flex justify-between text-2xl w-full px-3 py-2 bg-primary2 border-b-4 select-none'>
          <div id='logo-title' className='flex space-x-2 cursor-pointer'>
            <i><FontAwesomeIcon icon={ faCode } /></i> 
            <h1 className='font-extrabold font-ubunto tracking-wide'>{ title }</h1>
          </div>

          {/* <button className='hover:text-infusedBlack'><i><FontAwesomeIcon icon={ faMaximize } /></i></button> */}
          
          <label 
            className='hover:text-infusedBlack'
          >
              <i>
                { <FontAwesomeIcon icon={ maximizeMinimize ? faDownLeftAndUpRightToCenter : faMaximize } />}
              </i>

              <input 
                onChange={ event => onchange(event, targetSection) }
                checked={ maximizeMinimize }
                className="hidden"
                type="checkbox" 
                name="input"
              />
          </label>
    </div>
  )
}
