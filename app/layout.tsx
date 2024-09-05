import '@/app/ui/styles/global.css'
import { montserrat } from './ui/fonts';
import Header from './ui/layout/header';
import Footer from './ui/layout/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body id='page-container' className={`${montserrat.className} antialiased`}>
          <Header />
          <main className={`flex flex-col min-h-screen`}>
            <div className='mt-24 mb-24 bg-gray-900'>
              {children}
            </div>
          </main>
          <Footer/>
      </body>
    </html>
  );
}
