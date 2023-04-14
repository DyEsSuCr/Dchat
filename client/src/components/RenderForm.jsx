import { useState } from 'react'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'

export const RenderForm = ({ setToken }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <div>
      {
        toggle
          ? (
            <>
              <Login setToken={setToken} />
              <button className='m-3' onClick={() => setToggle(!toggle)}>
                Register
              </button>
            </>
            )
          : (
            <>
              <Register setToken={setToken} />
              <button className='m-3' onClick={() => setToggle(!toggle)}>
                Login
              </button>
            </>
            )
      }
    </div>
  )
}
