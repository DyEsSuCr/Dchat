import { useAuth0 } from '@auth0/auth0-react'

export function Home () {
  const { loginWithRedirect } = useAuth0()

  return (
    <div className='flex justify-center items-center relative h-screen'>
      <h1 className='text-5xl text-[#646cff] font-semibold absolute top-48'>Dyggram</h1>
      <button onClick={loginWithRedirect} className='rounded-md border-solid border-2 border-transparent text-2xl font-semibold bg-[#1a1a1a] py-3 px-5 hover:border-[#646cff] duration-300'>Login</button>
    </div>
  )
}
