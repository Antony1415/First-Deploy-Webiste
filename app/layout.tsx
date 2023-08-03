import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Website Article',
  description: 'Website Article',
}

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className='flex justify-between pt-[50px] bg-gray-100 pb-[50px]'>
          {/* <aside className='flex-1 bg-white mx-[25px]'>Left Side Content</aside> */}
          <div className='flex-[3] bg-white ml-[35px]'>
            {children}
          </div>
          <aside className='flex-1 mx-[25px]'>
            <center className='grid gap-[50px]'>
              <Image alt='' src={'/Berbagai-Makanan-Pemicu-Kanker.jpg'} width={350} height={0}/>
              <Image alt='' src={'/Berbagai-Makanan-Pemicu-Kanker.jpg'} width={350} height={0}/>
              <Image alt='' src={'/Berbagai-Makanan-Pemicu-Kanker.jpg'} width={350} height={0}/>
              {/* <Image alt='' src={'/Berbagai-Makanan-Pemicu-Kanker.jpg'} width={350} height={0}/> */}
            </center>
          </aside>
        </div>
        <Footer />
      </body>
    </html>
  )
}
