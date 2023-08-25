import type { Metadata } from 'next'
import { AuthContextProvider } from '@/context/AuthContext'

import './globals.css'

export const metadata: Metadata = {
  title: 'Chat React SocketIO'
}

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <body>
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  )
}
