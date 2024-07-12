import { lusitana } from './ui/fonts';
import Header from './ui/layout/header';
import Body from './ui/layout/body';
import Footer from './ui/layout/footer';

export default function Page() {
  return (
    <main className={`flex min-h-screen flex-col ${lusitana}`}>
      <Header />     
      <Body />
      <Footer />
    </main>
  );
}
