export function Form ({ title, children }) {
  return (
    <form className='flex flex-col gap-4'>
      <h2 className='text-4xl font-bold'>{title}</h2>
      {children}
    </form>
  )
}
