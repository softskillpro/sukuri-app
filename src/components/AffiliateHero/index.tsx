import { Inter } from 'next/font/google';
import styles from './AffiliateHero.module.scss';
import classNames from 'classnames';

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--Inter',
});

export const AffiliateHero = () => {
  return (
    <main className={styles.main}>
      <div className={styles.backgroundDiv} />
      <h1 className={classNames(styles.title, inter.className)}>
        Let&apos;s build Sukuri together
      </h1>
      <p className={inter.className}>
        Are you an influencer or content creator? Do you like to play video
        games? Do you currently have other subscription gated content? Or are
        you just interested in promoting new and exciting protocols? If you
        answered “yes” to any of those questions, then the Sukuri Affiliate
        Program may be right for you!
      </p>
    </main>
  );
};
