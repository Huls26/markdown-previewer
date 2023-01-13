import React, { useState, useEffect } from 'react';

import Editor from '@features/editor/';
import Previewer from '@features/previewer/';

export default function MardownPreviewer() {
  document.body.style.backgroundColor = "#f57842";
  const defaultVal = " # Welcome to my React Markdown Previewer! \n \n ## This is a sub-heading... \n ### And here's some other cool stuff: \n \n Heres some code, `<div></div>`, between 2 backticks. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. \n \n - **Preview:**  A live display of the generated HTML as it would render in a browser. \n - **HTML Source:**  The generated HTML before your browser makes it pretty. \n ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)";
  const defaultState = { 
                          textarea: defaultVal, 
                          input: {
                            'editor-section': false,
                            'previewer-section': false,
                          }                 
                       };

  const [value, setValue] = useState(() => defaultState);
  const valueText = value.textarea;
  const isMaximize = value.input;

  // display
  function displayAll() {
    return (
      <>
          <Editor 
          onchange={ handleEvent } 
          value={ valueText }
          isMaximize={ isMaximize }
        />
        <Previewer 
          onchange={ handleEvent } 
          value={ valueText } 
          isMaximize={ isMaximize }
        />
      </>
    )
  } 

  function displaySection() {
    const editorSection = isMaximize['editor-section'];
    const previewSection = isMaximize['previewer-section'];

    if (!editorSection === !previewSection) {
      return displayAll()
    } else if (editorSection) {
      return (
        <Editor 
          onchange={ handleEvent } 
          value={ valueText }
          isMaximize={ isMaximize }
        />
      )
    } else {
      return (
        <Previewer 
          onchange={ handleEvent } 
          value={ valueText } 
          isMaximize={ isMaximize }
        />
      )
    }
  }

  // event
  function handleEvent(event, id) {
    const target = event.target;
    const name = target.name;
    const isCheckbox = target.type === 'checkbox';
    const value = target.value;

    setValue(prevValue => {
      const changeInput = {
                            ...prevValue[name],
                            [id]: target.checked,
                          }
      
      return ({
        ...prevValue,
        [name]: isCheckbox ? changeInput : value,
      })

    })
  }

  return (
    <section 
      className='flex justify-center items-center flex-col space-y-5 p-5 
                  w-full h-full min-w-[270px]
                  md:flex-row md:space-x-5
                  md:space-y-0
                  md:p-10
                  lg:px-20'
    >
        { displaySection() }
    </section>
  )
}
