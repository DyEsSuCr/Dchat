import { Form } from '../components/Form'

export function Login () {
  return (
    <Form title='Login'>
      <input className='font-semibold px-1' type='text' />
      <input className='font-semibold px-1' type='password' />
    </Form>
  )
}
