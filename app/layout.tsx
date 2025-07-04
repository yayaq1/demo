import './globals.css'

export const metadata = {
  title: 'VibeSpark - Group Icebreaker Game',
  description: 'Fun, social icebreaker game for groups and meetups',
}

export default function RootLayout({
  children,
}: {
  children: any
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 