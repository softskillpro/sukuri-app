import React from 'react'
import { useRouter } from 'next/router'
import Seo from '../seo'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { LayoutContainer } from './styles'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const { asPath } = useRouter()

  return (
    <>
      <Seo />
      <LayoutContainer>
        {asPath !== '/' && <Header />}
        <main>{children}</main>
        <Footer />
      </LayoutContainer>
    </>
  )
}

export default Layout
