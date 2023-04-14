import { useState } from 'react'

import { Form } from '../components/Form'
import { authentication } from '../services/authentication'

export function Register () {
  const [form, setForm] = useState({})
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { confirmPassword, ...data } = form
    const token = await authentication('register', data)

    if (token.msg) return setError(token.msg)
  }

  return (
    <Form title='Register'>
      <input className='font-semibold px-1' type='text' name='username' onChange={handleChange} />
      <input className='font-semibold px-1' type='password' name='password' onChange={handleChange} />
      <input className='font-semibold px-1' type='password' name='confirmPassword' onChange={handleChange} />

      <button type='submit' onClick={handleSubmit}>Send</button>
      {error && <span className='text-indigo-600'>{error}</span>}
    </Form>
  )
}
