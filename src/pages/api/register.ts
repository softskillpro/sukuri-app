// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { redirect } from 'next/navigation';
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if (req.method === 'POST') {
    console.log('SERVICE: REGISTER - handling sign in request....')
    const body = req.body
    console.log(body)

    if(body.username && body.email && body.address) {
      // do the registration here in supabase
      // move this function out
      // need to create a parallel table for public users to handle jwt/nonce refreshment
      const handleSignUp = async (formData) => {
        'use server'
        const email = formData.get('email')
        const password = formData.get('password')
    
        const supabase = createServerActionClient({ cookies })
        const {data, error} = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              address: body.address
            }
          },
        })
        
        //emailRedirectTo: 'http://localhost:3000/auth/callback', check to see this from options
        //revalidatePath('/') check to see what this does
      }

      res.status(200).json({ status: true, message: 'Successful Account Creation' })  
    } else if (!body.username) {
      // validate input
      // console.log('invalid username')
      res.status(400).json({ status: false, message: 'Username not included' })  
    } else if (!body.email) {
      // validate input
      res.status(400).json({ status: false, message: 'Email not included' })  
    } else if (!body.address) {
      res.status(400).json({ status: false, message: 'Address not included' })  
    } else {
      res.status(400).json({ status: false, message: 'No ETH Address' })  
    }

    
    // redirect("/")
  } else {
    // Handle any other HTTP method
    res.status(400).json({ status: false, message: 'Invalid api method' })  
  }
  // 
}