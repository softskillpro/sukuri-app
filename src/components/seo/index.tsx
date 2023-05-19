import type { FC } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

interface SeoProps {
  title?: string
}

const Seo: FC<SeoProps> = (props) => {
  const { title } = props

  const fullTitle = title ? title + ' | Sukuri' : 'Sukuri'

  return (
    <Head>
      <title>{fullTitle}</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}

export default Seo

Seo.propTypes = {
  title: PropTypes.string,
}
