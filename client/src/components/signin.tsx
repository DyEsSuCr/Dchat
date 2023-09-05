'use client'

import api from '@/interceptors/api'
import { SyntheticEvent, useState } from 'react'
import { useAuthContext } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'

export function SigninForm () {
  const { saveToken } = useAuthContext()
  const router = useRouter()
  const [values, setValues] = useState({
    email: '',
    password: ''
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
      const { data: { token } } = await api.post('/auth/signin', values)
      saveToken(token)
      return router.push('chat')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form>
      <h1>Login</h1>
      <input type='email' name='email' value={values.email} onChange={handleChange} placeholder='email' />
      <input type='password' name='password' value={values.password} onChange={handleChange} placeholder='password' />
      <button type='submit' onClick={handleSubmit} />
    </form>
  )
}
