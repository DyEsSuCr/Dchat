import { baseUrl } from './config.js'

export const authentication = async (url, data = {}) => {
  const res = await fetch(`${baseUrl}/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  return await res.json()
}
