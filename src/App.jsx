import { React, useState, useEffect } from 'react'
import Form from './assets/Form'

function App() {
  return (
    <div className='container'>
      <section className='content-section'>
        <h1 className='title'>Learn to code by watching others</h1>
        <p className='content'>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </section>
      <section className='form-section'>
        <div className='free-container'>
          <p className='free-txt'>
            <b className='free-bold'>Try it free 7 days </b>
            then $20/mo. thereafter
          </p>
        </div>
        <div className='form-container'>
          <Form />
          <small className='terms'>
            By clicking the button, you are agreeing to our
            <b className='bold-terms'> Terms and Services</b>
          </small>
        </div>
      </section>
    </div>
  )
}

export default App
