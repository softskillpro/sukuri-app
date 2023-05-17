import React from 'react'
import Seo from '../seo'
import Header from '@/components/header'
import Footer from '@/components/footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Seo />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
