import { useState } from 'react'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

export function App () {
  const [toggle, setToggle] = useState(false)

  return (
    <div className='max-w-7xl mx-auto p-8 text-center flex flex-col justify-center items-center min-h-screen'>
      <div>
        {
        toggle
          ? (
            <>
              <Login />
              <button className='m-3' onClick={() => setToggle(!toggle)}>
                Register
              </button>
            </>
            )
          : (
            <>
              <Register />
              <button className='m-3' onClick={() => setToggle(!toggle)}>
                Login
              </button>
            </>
            )
      }
      </div>
    </div>
  )
}
