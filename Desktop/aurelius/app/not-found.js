import styles from './not-found.module.css'
import Link from 'next/link';

export default function NotFound() {

  return (
    <section className={styles['not-found']}>
      <h2>{`404 Page Not Found`}</h2>
      <h2>{`Oops! We can't find the page you're looking for.`}</h2>
      <p>{`No worries, it happens to the best of us. Why not head back to the homepage and try again?`}</p>
      <Link href="/"><p>Return Home</p></Link>
    </section>
  );
}
