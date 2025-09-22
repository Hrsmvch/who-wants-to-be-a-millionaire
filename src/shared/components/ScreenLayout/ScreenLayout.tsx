import React from 'react';
import Image from 'next/image';
import type { ReactNode } from 'react';
import styles from './ScreenLayout.module.scss';

interface ScreenLayoutProps {
  children: ReactNode;
  themed?: boolean;
}

export default function ScreenLayout({ children, themed }: ScreenLayoutProps) {
  return (
    <div className={`${styles.screenLayout} ${themed ? styles.themed : ''}`}>
      <div className={styles.screenLayout__image}>
        <Image
          src="/hand.webp"
          alt="Thumbs up illustration"
          width={800}
          height={470}
          priority
          fetchPriority="high"
          sizes="90vw, (min-width: 481px) 80vw, (min-width: 769px) 60vw, (min-width: 1025px) 40vw, (min-width: 1441px) 40vw, (min-width: 2561px) 800px"
        />
      </div>
      <main className={styles.screenLayout__content}>{children}</main>
    </div>
  );
}

ScreenLayout.defaultProps = {
  themed: false,
};
