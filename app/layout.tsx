import '@/app/ui/styles/global.css'
import { inter } from './ui/fonts';
import Header from './ui/layout/header';
import Footer from './ui/layout/footer';

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
