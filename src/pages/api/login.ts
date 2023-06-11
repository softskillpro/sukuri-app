import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
  }

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
){
    if(req.method === 'POST') {
          /*
            1. verify the signed message matches the requested address
            2. select * from public.user table where address matches
            3. verify the nonce included in the request matches what's 
            already in public.users table for that address
            4. if there's no public.users.id for that address, then you
            need to create a user in the auth.users table
        */
        const { data: user, error } = await supabase.auth.admin.createUser({
            email: `user@email.com`,
            user_metadata: { address: address }
        })

        // 5. insert response into public.users table with id

        await supabase
        .from(SUPABASE_TABLE_USERS)
        .update({ auth: {
            genNonce: newNonce, // update the nonce, so it can't be reused
            lastAuth: new Date().toISOString(),
            lastAuthStatus: "success"
            },
        id: user.id, // same uuid as auth.users table
        })
        .eq('address', address) // primary key

        // 6. lastly, we sign the token, then return it to client

        const token = jwt.sign({
            address: address, // this will be read by RLS policy
            sub: user.id,
            aud: 'authenticated'
        }, JWT, { expiresIn: 60*2 } )
        
        res.status(200).send(token)
    }
}