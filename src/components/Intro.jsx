import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Faisal</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Frontend Developer</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
            I'm a frontend developer building my
            version of the digital world one step at a time. All coding projects
            are built from the ground up, from planning and designing all the way
            to solving real-life problems with code.
            <br />
            <br />
            <p className='text-sm max-w-xl font-bold'>
               Checkout my Github for all my projects!
            </p>
            <a
               href="https://github.com/fasbender"
               target="_blank"
               className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
               rel="noreferrer noopener"
            >
               Fasbender
            </a>{' '}
         </p>
      </div>
   )
}

export default Intro;