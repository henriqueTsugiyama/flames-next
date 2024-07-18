import '@/app/ui/styles/global.css'
import { redhat, inter } from './ui/fonts';
import Header from './ui/layout/header';
import Footer from './ui/layout/footer';
import Image  from 'next/image'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body id='page-container' className={`${inter.className} antialiased`}>
          <Header />
          <>{children}</>
          <Footer/>
      </body>
    </html>
  );
}
