import { useAuth0 } from '@auth0/auth0-react'

export function Chat () {
  const { user, logout } = useAuth0()

  return (
    <div className='flex'>
      <h1>{user.nickname}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
