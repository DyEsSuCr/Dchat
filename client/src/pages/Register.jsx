import { Form } from '../components/Form'

export function Register () {
  return (
    <Form title='Register'>
      <input className='font-semibold px-1' type='text' />
      <input className='font-semibold px-1' type='password' />
      <input className='font-semibold px-1' type='password' />
    </Form>
  )
}
