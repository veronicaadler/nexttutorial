import Link from "next/link";
import styles from '../styles/Home.module.css'
import Head from 'next/head';

export default function Home() {

  //empty tag is a React.fragment
  return (
    <> 
    <Head>
      <title>Ninja List | Home </title>
      <meta name="keywords" content="ninjas"/>
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Marshmallow chocolate cake chocolate cake oat cake. I love cake dragée chocolate cake topping cupcake cupcake bear claw. Cookie fruitcake I love tiramisu ice cream liquorice lollipop cake croissant.</p>
      <Link href="/ninjas">
        <a className={styles.btn}>
        See Ninja Listing
        </a>
      </Link>
    </div>
    </>
  )
}
