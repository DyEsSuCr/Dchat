'use client'

import api from '@/interceptors/api'
import { SyntheticEvent, useState } from 'react'

export function SignupForm () {
  const [values, setValues] = useState({
    email: '',
    password: '',
    username: ''
  })

  const handleChange = (e: SyntheticEvent) => {
    const { name, value } = e.target as HTMLButtonElement

    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    try {
      const { data } = await api.post('/auth/signup', values)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form>
      <h1>Login</h1>
      <input type='text' name='username' value={values.username} onChange={handleChange} />
      <input type='password' name='password' value={values.password} onChange={handleChange} />
      <input type='email' name='email' value={values.email} onChange={handleChange} />
      <button onClick={handleSubmit} />
    </form>
  )
}
