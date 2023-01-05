import { React, useState, useEffect } from 'react'

function Form() {
  const [FormData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  function handleChange(event) {
    const { name, value } = event.target
    return setFormData(prev => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  function handleClick(event) {
    event.preventDefault()
    const firstName = document.querySelector('#firstNameError')
    const firstNameSVG = document.querySelector('.firstName')

    if (!FormData.firstName) {
      firstName.style.opacity = 1
      firstNameSVG.style.backgroundImage = 'url("../images/icon-error.svg")'
    } else {
      firstName.style.opacity = 0
      firstNameSVG.style.backgroundImage = 'none'
    }

    const lastName = document.querySelector('#lastNameError')
    const lastNameSVG = document.querySelector('.lastName')

    if (!FormData.lastName) {
      console.log('last Name is empty')
      lastName.style.opacity = 1
      lastNameSVG.style.backgroundImage = 'url("../images/icon-error.svg")'
    } else {
      lastName.style.opacity = 0
      lastNameSVG.style.backgroundImage = 'none'
    }

    const email = document.querySelector('#emailError')
    const emailSVG = document.querySelector('.email')

    if (!FormData.email) {
      console.log('email is empty')
      email.style.opacity = 1
      emailSVG.style.backgroundImage = 'url("../images/icon-error.svg")'
    } else {
      email.style.opacity = 0
      emailSVG.style.backgroundImage = 'none'
    }

    const password = document.querySelector('#passwordError')
    const passwordSVG = document.querySelector('.password')

    if (!FormData.password) {
      console.log('password is empty')
      password.style.opacity = 1
      passwordSVG.style.backgroundImage = 'url("../images/icon-error.svg")'
    } else {
      password.style.opacity = 0
      passwordSVG.style.backgroundImage = 'none'
    }
  }

  return (
    <form onSubmit={handleClick}>
      <input
        type='text'
        placeholder='First Name'
        className='input-fields firstName'
        name='firstName'
        value={FormData.firstName}
        onChange={handleChange}
      />
      <span className='error' id='firstNameError'>
        First Name cannot be empty
      </span>
      <input
        type='text'
        placeholder='Last Name'
        className='input-fields lastName'
        name='lastName'
        value={FormData.lastName}
        onChange={handleChange}
      />
      <span className='error' id='lastNameError'>
        Last Name cannot be empty
      </span>
      <input
        type='email'
        placeholder='Email Address'
        className='input-fields email'
        name='email'
        value={FormData.email}
        onChange={handleChange}
      />
      <span className='error' id='emailError'>
        Looks like this is not an email
      </span>
      <input
        type='password'
        placeholder='Password'
        className='input-fields password'
        name='password'
        value={FormData.password}
        onChange={handleChange}
      />
      <span className='error' id='passwordError'>
        Password cannot be empty
      </span>
      <button className='btn'>Claim your free trial</button>
    </form>
  )
}

export default Form
