import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { Connector } from 'wagmi';
import Typography from '@mui/material/Typography';
import FlexBox from '@/components/common/FlexBox';
import Loader from '@/components/common/Loader';
import { ConnectWalletContainer, StyledButton } from './styles';

import { getCsrfToken, signIn, useSession } from "next-auth/react"
import { SiweMessage } from "siwe"
import { useAccount, useConnect, useNetwork, useSignMessage } from "wagmi"
import { InjectedConnector } from 'wagmi/connectors/injected'

const wallets = [
  {
    name: 'Metamask',
    icon: '/images/metamask.png',
  },
  {
    name: 'Coinbase Wallet',
    icon: '/images/coinbase.png',
  },
  {
    name: 'WalletConnect',
    icon: '/images/walletconnect.png',
  },
  {
    name: 'Rainbow',
    icon: '/images/rainbow.png',
  },
];

const ConnectWallet = () => {
  const router = useRouter();
  const [current, setCurrent] = useState('');
  const { signMessageAsync } = useSignMessage()
  const { chain } = useNetwork()
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { data: session, status } = useSession()

  // const handleConnectWallet = async (connector: Connector) => {
  //   try {
  //     setCurrent(connector.id);
  //     if (!isConnected) {
  //       await connectAsync({ connector });
  //     }
  //     router.push('/marketplace');
  //   } catch (err: any) {
  //     console.log(err?.message || err);
  //   }
  // };

  const handleLogin = async () => {
    try {
      const callbackUrl = "/protected"
      const message = new SiweMessage({
        domain: window.location.host,
        address: address,
        statement: "Sign in with Ethereum to the app.",
        uri: window.location.origin,
        version: "1",
        chainId: chain?.id,
        nonce: await getCsrfToken(),
      })
      const signature = await signMessageAsync({
        message: message.prepareMessage(),
      })
      signIn("credentials", {
        message: JSON.stringify(message),
        redirect: false,
        signature,
        callbackUrl,
      })
    } catch (error) {
      console.log(error)
      window.alert(error)
    }

  }

  useEffect(() => {
    console.log(isConnected);
    if (isConnected && !session) {
      handleLogin()
      router.push('/temp')
    } else if (isConnected && session) {      
      // check here to see if user is in public table
      router.push('/temp')
    }
  }, [isConnected]) 

  return (
    <ConnectWalletContainer>
      <Typography variant='h6' fontWeight={500} mt={4.5}>
        Welcome!
      </Typography>
      <Typography
        variant='custom1'
        color='text.secondary'
        mb={3.5}
        component='div'
      >
        Connect your wallet.
      </Typography>

      <StyledButton onClick={() => handleLogin()}>
        <FlexBox>
          <Image
            src='/images/metamask.png'
            width={20}
            height={20}
            alt='Wallet'
            style={{ marginRight: 9 }}
          />
          Metamask
        </FlexBox> 
      </StyledButton>

      {/* {connectors.map((connector, id) => (
        <StyledButton
          key={connector.id}
          disabled={isLoading}
          onClick={() => handleLogin(connector)}
          style={{ justifyContent: 'space-between' }}
        >
          <FlexBox>
            <Image
              src={wallets[id]?.icon || ''}
              width={20}
              height={20}
              alt='Wallet'
              style={{ marginRight: 9 }}
            />
            {connector.name}
          </FlexBox>
          {isLoading && current === connector.id && <Loader small='true' />}
        </StyledButton>
      ))} */}

      <FlexBox className='wallet-helper'>
        <Typography variant='subtitle2' fontWeight={700} color='white.main'>
          I’m a creator!
        </Typography>
        <Typography variant='custom1' color='white.main'>
          Learn more about Sukuri
        </Typography>
        <Typography variant='custom1' color='white.main'>
          Sign up as Creator
        </Typography>
      </FlexBox>
    </ConnectWalletContainer>
  );
};

export async function getServerSideProps(context: any) {
  return { 
    props: {
      csrfToken: await getCsrfToken(context),
    },
  }
}

export default ConnectWallet;
