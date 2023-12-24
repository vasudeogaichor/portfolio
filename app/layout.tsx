import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vasudeo Gaichor | Personal Portfolio',
  description: 'Vasudeo is an aspiring full stack developer, currently having more than 1 year experience in backend development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-grey-50 text-grey-950`}>
        <div className='bg-[#00000] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
        <div className='bg-[#dbd7fd] absolute top-[-1rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
        <div></div>
        {children}
        </body>
    </html>
  )
}
