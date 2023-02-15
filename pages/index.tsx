import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { text } from 'stream/consumers'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  const [nameInput, setNameInput] = useState('');
  const submitUser = async () => {
    //let value = document.getElementById("nameBox");
    const res = await fetch('http://54.84.141.215:8080/userNames/', 
    {method: 'POST', body: JSON.stringify({nameInput}), mode:'cors'}
    );
    console.log(res);
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 id="pageHeader">Enter your name below.</h1>
        <div id="input1">
          <form>
            <input type="text" value={nameInput} onChange={e => setNameInput(e.target.value)}></input>
            <input type="button" value="Submit" id="submitBox" name="submitBox" onClick={submitUser}></input>
          </form>
          <h1>Hello { nameInput }</h1>
          <Link href="/allUsers">View all users</Link>
        </div>        
      </main>
    </>
  )
}