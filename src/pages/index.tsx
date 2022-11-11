import { useContext, FormEvent, useState } from 'react'

import Head from 'next/head'
import Image from 'next/image';
import styles from '../../styles/home.module.scss';

import logo from '../../public/logo3.jpg';

import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'
import { toast } from 'react-toastify';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { AuthContext } from '../contexts/AuthContext';
import { canSSRGuest } from '../utils/canSSRGuest';

export default function Home() {
  const { signIn } = useContext(AuthContext)
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ loading, setLoading ] = useState(false);

  async function handleLogin(event: FormEvent){
    event.preventDefault();
     if (email === '' || password === '' ){
      toast.warning("Fill up the form")
      return;
     }

     setLoading(true);

    let data= {
      email ,
      password
    }

     await signIn(data)

     setLoading(false);
  }

  return (
    <>
    <Head>
      <title> Create your Login</title> 
    </Head>
    <div className={styles.containerCenter}>
      <Image src={logo} alt="Logo Sujeito Pizzaria" />

      <div className={styles.login}>
        <form onSubmit={handleLogin}>
          <Input
            placeholder= "Type your email"
            type="text"
            value={email}
            onChange={(e)=> setEmail(e.target.value) }
          />

          <Input
            placeholder="Your password"
            type="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value) }
          />
          
          <Button
            type="submit"
            loading={loading}
          >
            Confirm
          </Button>
        </form>

        <Link legacyBehavior href="/signup">
           <a className={styles.text}>Don't have an account yet?  Register Here!</a>
        </Link>

      </div>
    </div>
    </>
  )
}

export const getServerSideProps = canSSRGuest(async (ctx) => {

  return{
    props:{}
  }

})
