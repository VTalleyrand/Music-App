import styles from './page.module.css';
import Hero from '@/components/home/Hero';
import Video from '@/components/home/Video';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Nav from '@/components/Nav';

export default async function Home() {
  // get user session in a server component
  const session = await getServerSession();

  // if user logged in always redirect the homepage to dashboard
  if (session || session?.user) {
    redirect('/dashboard');
  }

  return (
      <main className={styles.main}>
        <Hero />
        <Video />
      </main>
  );
}
