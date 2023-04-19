import { useAuth0 } from '@auth0/auth0-react'

export function Sidebar () {
  const { user, logout } = useAuth0()

  return (
    <div className='flex flex-col justify-between h-screen w-[30%] bg-[#3e404d] p-4 shadow-[#494b58] shadow-xl'>
      <div className='flex justify-between items-center'>
        <figure className='overflow-hidden rounded-full bg-slate-200 w-16'>
          <img src={user.picture} alt={user.nickname} />
        </figure>
        <button className='h-max' onClick={logout}>Logout</button>
      </div>
    </div>
  )
}
