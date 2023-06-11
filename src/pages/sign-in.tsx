'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignUp = async () => {
    router.push('/register')
    router.refresh()
  }

  const handleSignIn = async () => {
    let user = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    console.log(user)

    // need to call 

    router.push('/') // go home when done
    router.refresh()
  }

  const handleSignInWithAddress = async () => {
    // prompt user to sign message in wallet
    // figure out how to do this w wagmi
    let resp = ''

    let data = {
      signed: resp.msg,
      nonce: nonceRequest.nonce,
      address: 
    }

    const response = await fetch('/api/login', {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const verifyRequest = await postData(
      `${state.config.API_URL}/api/login`, 
      { signed: msg, 
        nonce: nonceRequest.nonce,
        address: state.address 
      }
    )
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <>
      <input name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={handleSignUp}>Sign up</button>
      <button onClick={handleSignIn}>Sign in</button>
      <button onClick={handleSignOut}>Sign out</button>
    </>
  )
}