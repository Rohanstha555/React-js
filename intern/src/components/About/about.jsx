import React from 'react'

function About() {
  

  return (
    <div className="grid grid-cols-2 gap-8 p-8 bg-white border border-gray-100 rounded-xl">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-3">About Us</h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          We build fast, clean, and reliable web experiences. Our team is passionate about design and developer experience.
        </p>
      </div>
      <div className="flex flex-col gap-2.5">
        
          <div className="flex items-center gap-3 bg-gray-50 px-4 py-2.5 rounded-lg">
            <div className="w-2 h-2 rounded-full bg-gray-900 shrink-0" />
            <span className="text-sm font-medium text-gray-900">login</span>
          </div>

      </div>
    </div>
  );
}


export default About
