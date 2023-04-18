import { useState, useEffect } from 'react'
import { identifyUser } from '../services/identifyUser'

export function Chat () {
  const [dataUser, setDataUser] = useState(null)

  const user = async () => {
    const user = await identifyUser()
    setDataUser(user)
  }

  useEffect(() => {
    user()
  }, [])

  return (
    <div>
      <h1>Chat</h1>
      <p>hoola! {dataUser?.username}</p>
    </div>
  )
}
