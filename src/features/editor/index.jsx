import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMaximize } from '@fortawesome/free-solid-svg-icons';


import PromptSection from "@components/PromptSection/";

export default function index({onchange, value, isMaximize}) {
  const id = "editor-section";
  const textarea = <textarea onChange={ onchange } value={ value } className='flex-grow p-3 font-anybody bg-primary3 w-full min-h-[15em]' name="textarea" id="text-editor" cols="30" rows="10" spellCheck="false">
  </textarea> 

  return (
    <PromptSection 
      title={ "Editor "} 
      id={ id } 
      onchange={ onchange }
      isMaximize={ isMaximize }
    > 
      { textarea }
    </PromptSection> 
  )
}
