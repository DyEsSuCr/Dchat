'use client'

import { useAuthContext } from '@/context/AuthContext'
import { redirect } from 'next/navigation'

export default function Layout ({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuthContext()

  if (!isAuthenticated) return redirect('/')

  return <>{children}</>
}
