import { socket } from './services/settings'
import { useState } from 'react'

export function App () {
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    socket.emit('message', message)
    setMessage('')
  }

  return (
    <div>
      <h1>Rchat</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='text' onChange={(e) => setMessage(e.target.value)} value={message} />
        <button>Send</button>
      </form>
    </div>
  )
}
