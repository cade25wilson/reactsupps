// import { useState } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import './App.css'

function App() {
  return (
    <>
    <Header />
      <div className='container p-4'>
        <div className='row'>
          <div className='col-4 col-lg-6'>
            {/* TODO MESSAGE ITEM */}
          </div>
          <div className='col-4 col-lg-2'>
            {/* TODO SELECT DROPDOWN */}
          </div>
          <div className='col-3 col-lg-3 text-right'>
            {/* TODO SEARCH FORM */}
          </div>
          <div className='col-1 col-lg-1'>
            <div className='dropdown'>
            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              Profile
            </a>
              {/* TODO DROPDOWN */}
            </div>
          </div>
        </div>
        <div className='row d-flex align-items-stretch pb-5'>
          {/* TODO SUPPLEMENT COMPONENT */}
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='d-flex justify-content-center'>
              {/* TODO PAGINATION BUTTONS */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
