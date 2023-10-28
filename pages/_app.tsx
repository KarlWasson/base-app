import '../styles/global.css'
import type { AppProps } from 'next/app';

// You can uncomment this once you're sure it works
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog Outline Generator',
  description: 'Generate a blog outline',
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
