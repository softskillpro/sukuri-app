import React from 'react'
import Seo from '../seo'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { LayoutContainer } from './styles'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Seo />
      <LayoutContainer>
        <Header />
        <main>{children}</main>
        <Footer />
      </LayoutContainer>
    </>
  )
}

export default Layout
