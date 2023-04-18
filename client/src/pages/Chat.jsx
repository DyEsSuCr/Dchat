import { useState, useEffect } from 'react'
import { identifyUser } from '../services/identifyUser'
import { Board } from '../components/Board'
import { Messages } from '../components/Messages'
import { Sidebar } from '../components/Sidebar'

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
    <div className='flex'>
      <Sidebar user={dataUser} />
      <div>
        <Messages />
        <Board />
      </div>
    </div>
  )
}
