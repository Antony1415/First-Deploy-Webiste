import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-evenly text-2xl p-5 border-b-[1px] border-black'>
      <div className='flex-1'/>
      <ul className='flex flex-[3] justify-between'>
        <li><Link href={'/'}>Beranda</Link></li>
        <li><Link href={'/'}>Terbaru</Link></li>
        <li><Link href={'/'}>Populer</Link></li>
        <li><Link href={'/artikel'}>Artikel</Link></li>
      </ul>
      <div className='flex-1'/>
    </div>
  )
}

export default Header
