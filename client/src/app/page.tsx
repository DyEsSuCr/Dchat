'use client'

import { SigninForm } from '@/components/signin'
import { useAuthContext } from '@/context/AuthContext'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

export default function App () {
  const { isAuthenticated } = useAuthContext()

  useEffect(() => {
    if (isAuthenticated) return redirect('chat')
  }, [isAuthenticated])

  return (
    <div>
      <SigninForm />
    </div>
  )
}
