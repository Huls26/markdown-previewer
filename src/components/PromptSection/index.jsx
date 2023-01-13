import React from 'react'
import TitleBar from "@components/TitleBar/";

export default function index({title, id, children, onchange, isMaximize}) {
  const isM = isMaximize[id];
  const scaleY = isM ? "h-[90vh]" : "" ;
  return (
    <section id={ id } className={ 
                                  `
                                  flex flex-col 
                                  border-4 rounded w-full max-w-[50em] h-[30em] 
                                  shadow-neoShadow
                                  md:h-[90vh]
                                  ${ scaleY }` 
                                  }
    >
        <TitleBar 
          title={ title } 
          targetSection={ id } 
          onchange={ onchange } 
          isMaximize={ isMaximize }
        />
        { children }
    </section>
  )
}
