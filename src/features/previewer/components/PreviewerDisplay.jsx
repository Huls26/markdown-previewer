import React, { useEffect } from 'react';

import DOMPurify from 'dompurify';
import { marked } from 'marked';

export default function PreviewerDisplay({value}) {
  const parseValue = marked.parse(value);
  const content = DOMPurify.sanitize(parseValue);

  function createMarkup() {
    return {__html: content};
  }

  return (
    <div 
      id='previewer-display'
      className='flex-grow px-5 py-7 
                 font-techMono font-semibold 
                 bg-primary3 
                 w-full min-h-[15em] 
                 overflow-auto
                 select-none'  
      dangerouslySetInnerHTML={ createMarkup() }
    />
  )
}
