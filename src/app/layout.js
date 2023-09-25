import Header from '@/components/Header'
import './globals.css'
import Context from '@/components/Context'

export const metadata = {
  title: "Z's Restaurant",
  description: 'Powered by NextJS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='w-full h-full 2xl:text-[20px]'>
      <body className='box-border w-full h-full p-0 m-0 overflow-x-hidden montserrat_'>
        <Context>
        <Header/>
        {children}
        </Context>
        </body>
    </html>
  )
}
