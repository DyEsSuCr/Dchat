import { baseUrl } from './config.js'

export const identifyUser = async () => {
  const token = JSON.parse(window.localStorage.getItem('token'))

  const res = await fetch(`${baseUrl}/users`, {
    method: 'GET',
    headers: {
      token: `Bearer ${token}`
    }
  })

  return await res.json()
}
