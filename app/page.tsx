import { lusitana } from './ui/fonts';
import Body from './ui/layout/body';

export default function Page() {
  return (
    <main className={`flex min-h-screen flex-col ${lusitana}`}>
      {/* <Body /> */}
      <div className='flex grow flex-col items-center gap-4 p-8 md:flex-column bg-yellow-400'></div>
    </main>
  );
}
