import { useState } from 'react'

import { Form } from '../components/Form'
import { authentication } from '../services/authentication'

export function Login ({ setToken }) {
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

    const token = await authentication('login', form)

    if (token.msg) return setError(token.msg)

    window.localStorage.setItem('token', JSON.stringify(token))
    setToken(token)
  }

  return (
    <Form title='Login'>
      <input
        className='font-semibold px-1' type='text'
        name='username'
        onChange={handleChange}
      />

      <input
        className='font-semibold px-1' type='password'
        name='password'
        onChange={handleChange}
      />

      <button onClick={handleSubmit} type='submit'>Send</button>
      {error && <span className='text-indigo-600'>{error}</span>}
    </Form>
  )
}
