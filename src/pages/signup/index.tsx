import { useState, FormEvent, useContext  } from 'react'

import Head from 'next/head'
import Image from 'next/image';
import styles from '../../../styles/home.module.scss';

import logo from '../../../public/logo3.jpg';
import { toast } from 'react-toastify';
import { Input } from '../../components/ui/Input'
import { Button } from '../../components/ui/Button'

import { AuthContext } from '../../contexts/AuthContext'

import Link from 'next/link';

export default function SignUp() {
  const { signUp } = useContext(AuthContext);

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false);

  async function handleSignUp(event: FormEvent){
    event.preventDefault();

    if(name === '' || email === '' || password === ''){
     toast.error("Fill up the form")
      return;
    }

    setLoading(true);

    let data = {
      name,
      email,
      password
    }

    await signUp(data)

    setLoading(false);

  }

  return (
    <>
    <Head>
      <title>Create Login</title> 
    </Head>
    <div className={styles.containerCenter}>
      <Image src={logo} alt="Logo Sujeito Pizzaria" />

      <div className={styles.login}>
        <h1>Create your account</h1>

        <form onSubmit={handleSignUp}>
          <Input
            placeholder="Your name"
            type="text"
            value={name}
            onChange={ (e) => setName(e.target.value) }
          />

          <Input
            placeholder="Your email"
            type="text"
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
          />

          <Input
            placeholder="Your password"
            type="password"
            value={password}
            onChange={ (e) => setPassword(e.target.value) }
          />
          
          <Button
            type="submit"
            loading={loading}
          >
            Confirm
          </Button>
        </form>

        <Link legacyBehavior  href="/">
           <a className={styles.text}>Already have an account? Login here !</a>
        </Link>

      </div>
    </div>
    </>
  )
}
