import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { text } from 'stream/consumers'
import { AppProps } from 'next/app'

const inter = Inter({ subsets: ['latin'] })

//This is an implicit any error, doesn't have a direct effect
export default function UserNames({ userNamesFromAPI }:{userNamesFromAPI: string[]}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 id="pageHeader">All Previously Logged in Users:</h1>
        <div>
          <p>
            { userNamesFromAPI.map(user => (
              <div key={user}>
                { user }
              </div>
            )
              ) }
          </p>
        </div>
      </main>
    </>
  )
}
export async function getServerSideProps(context:any) {
  const res = await fetch('https://54.84.141.215:8080/userNames/');
  const userNamesFromAPI = await res.json();
  console.log(userNamesFromAPI);
  return {
    props: { userNamesFromAPI }, // will be passed to the page component as props
  }
}
