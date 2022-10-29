import React from 'react'
import Content from './components/Content'
import Hero from './components/Hero'
import Details from './components/Details'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
function App () {
  return (
    <div className='bg-[#feecec] dark:bg-slate-900 dark:text-slate-50/90 text-slate-900'>
      <Hero />
      <Content />
      <Details />
      <Footer />
      <ScrollToTop />
    </div>
  )
}
export default App
