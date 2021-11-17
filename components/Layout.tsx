import Head from 'next/head';
import Image from 'next/image';

import Link from 'next/link';
import React from 'react';
import { Footer } from './Footer';
import Header from './Header';

const name = 'Takumi Kimura';
export const siteTitle = 'My Blog';

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <>
      <div className='bg-gray-200 max-w-xl mx-auto'>
        <Header />
        <div className='px-4'>
          <Head>
            <link rel='icon' href='/favicon.ico' />
            <meta
              name='description'
              content='Learn how to build a personal website using Next.js'
            />
            <meta
              property='og:image'
              content='/public/images/computer-gc41ead480_1280.jpg'
            />
            <meta name='og:title' content={siteTitle} />
            <meta name='twitter:card' content='summary_large_image' />
          </Head>
          <div className='flex flex-col items-center mb-8'>
            {home ? (
              <>
                <Image
                  priority
                  src='/images/profile.jpg'
                  className='rounded-full'
                  height={144}
                  width={144}
                  alt={name}
                />
                <h1 className='text-4xl font-extrabold tracking-tighter my-4 '>
                  {name}
                </h1>
              </>
            ) : (
              <>
                <Link href='/'>
                  <a>
                    <Image
                      priority
                      src='/images/profile.jpg'
                      className='rounded-full'
                      height={108}
                      width={108}
                      alt={name}
                    />
                  </a>
                </Link>
                <h2 className='text-2xl my-4'>
                  <Link href='/'>
                    <a className='text-indigo-500'>{name}</a>
                  </Link>
                </h2>
              </>
            )}
          </div>
          <main>{children}</main>
          {!home && (
            <div className='mt-12'>
              <Link href='/'>
                <a>← Back to home</a>
              </Link>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}
