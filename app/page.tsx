import { lusitana } from './ui/fonts';
import Body from './ui/layout/body';

export default function Page() {
  return (
    <main className={`flex min-h-screen flex-col ${lusitana}`}>
      <Body />
    </main>
  );
}
