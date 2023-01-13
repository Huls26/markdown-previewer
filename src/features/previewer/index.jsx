import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

import PromptSection from '@components/PromptSection/';
import PreviewerDisplay from './components/PreviewerDisplay';

export default function index({value, onchange, isMaximize}) {
  const id = "previewer-section";
  
  return (
    <PromptSection 
      title={ "Previewer" } 
      id={ id } 
      onchange={ onchange }
      isMaximize={ isMaximize }
    >
      <PreviewerDisplay value={ value } id={ id }/>  
    </PromptSection>
    )
}
