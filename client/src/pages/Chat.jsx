import { Board } from '../components/Board'
import { Messages } from '../components/Messages'
import { Sidebar } from '../components/Sidebar'

export function Chat () {
  return (
    <>
      <Sidebar />
      <div className='flex flex-col h-screen w-[70%] bg-[#3e404d] p-4 shadow-[#494b58] shadow-xl'>
        <Messages />
        <Board />
      </div>
    </>
  )
}
