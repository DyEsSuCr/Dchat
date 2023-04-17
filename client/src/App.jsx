import { Chat } from './pages/Chat'
import { RenderForm } from './components/RenderForm'
import { useLocalStorage } from './hooks/useLocalStorage'

export function App () {
  const { item: token, setItem } = useLocalStorage('token')

  return (
    <div className='max-w-7xl mx-auto p-8 text-center flex flex-col justify-center items-center min-h-screen'>
      {
        !token
          ? <RenderForm setToken={setItem} />
          : <Chat />
      }
    </div>
  )
}
