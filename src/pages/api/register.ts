// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { redirect } from 'next/navigation';


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

    if(body.username && body.email) {
      // do the registration here in supabase      
      res.status(200).json({ status: true, message: 'Successful Account Creation' })  
    } else if (!body.username) {
      // validate input
      // console.log('invalid username')
      res.status(400).json({ status: false, message: 'Username not included' })  
    } else if (!body.email) {
      // validate input
      res.status(400).json({ status: false, message: 'Email not included' })  
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