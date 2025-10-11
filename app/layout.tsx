import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Asteri Memo - Building the ScaleAI for Human Personalization',
  description: 'Asteri startup memo outlining our vision for AI that understands human behavior at a subconscious level',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {children}
        <footer className="site-footer">
          <a href="/privacy">Privacy</a>
          <span> · </span>
          <a href="/terms">Terms</a>
        </footer>
      </body>
    </html>
  )
} 