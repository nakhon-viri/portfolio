import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { en, th } from '../../locales/nav'
import { useRouter } from 'next/router'
const Nav: React.FC = () => {
  const router = useRouter()
  const { locale, asPath } = router
  const t = locale === 'th' ? th : en
  return (
    <nav className=" h-[60px] w-full">
      <div className=" container h-full flex  items-center justify-between">
        <div className="flex items-center gap-4 text-3xl font-DancingScript font-bold">
          <Image src={'/LogoMe.png'} alt="me" width="64" height="45" />
          <span>Nakhon</span>
        </div>
        <div className="flex items-center gap-4 text-xl font-DMSans ">
          <Link href={'/'}>{t.home}</Link>
          <Link href="/about">{t.about}</Link>
          <Link href={'/'}>{t.resume}</Link>
          <Link href={'/'}>{t.project}</Link>
          <Link href={'/'}>{t.contact}</Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
