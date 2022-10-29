import React, { useState, useEffect } from 'react'
import { ChevronDoubleUpIcon } from '@heroicons/react/24/outline'
const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true)
      } else {
        setShowScrollTopButton(false)
      }
      return window.scrollY()
    })
  }, [])

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div>
      {showScrollTopButton && (
        <ChevronDoubleUpIcon
          className="w-12 h-12 
          cursor-pointer right-[42%] bottom-5 fixed rounded-2xl
          md:right-28 md:bottom-36 border-2 border-yellow-100 bg-slate-900/90 text-yellow-50 z-50"
          onClick={scrollTop}
        />
      )}
    </div>
  )
}

export default ScrollToTop
