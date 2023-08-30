'use client'

import { useAuthContext } from '@/hooks/useAuthContext'
import { redirect } from 'next/navigation'

export default function Layout ({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuthContext()

  if (!isAuthenticated) return redirect('/')

  return <>{children}</>
}
