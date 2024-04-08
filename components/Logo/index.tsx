import { homePathname, loginPagePathname } from '@/constants/pathname'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={homePathname}>
        <Image src="/images/logo.svg" height={30} width={97} alt="logo" />
    </Link>
  )
}

export default Logo